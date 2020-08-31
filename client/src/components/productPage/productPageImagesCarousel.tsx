import React, { useState, MouseEventHandler, useEffect, useRef } from 'react';
import { Container, CarouselButton, ImageList, Img, ImageListContainer, CarouselSVG} from './styles';

interface Props {
  images: Array<string>;
  imgMouseOverHandler: MouseEventHandler;
  imgListMouseLeaveHandler: (url: string) => void;
  fullFeaturedImgIndex: number;
  imgClickHandler: (index: number, url: string) => void;
  setFullFeaturedImgIndex: React.Dispatch<React.SetStateAction<number>>;
  setFeaturedImg: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export const ProductPageImagesCarousel: React.FC<Props> = ({
  images,
  imgMouseOverHandler,
  imgListMouseLeaveHandler,
  fullFeaturedImgIndex,
  imgClickHandler,
  setFullFeaturedImgIndex,
  setFeaturedImg,
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [currentImagesList, setCurrentImagesList] = useState<Array<string>>([]);
  const [imageListMarginTop, setImageListMarginTop] = useState<number>(0);
  const [shouldAnimate, setShouldAnimate] = useState<boolean>(false);

  const currentImagesListRef = useRef<typeof currentImagesList>([]);
  currentImagesListRef.current = currentImagesList;

  useEffect(() => {
    const copy = images.slice(0);
    for (let i = 0; copy.length < 7; i++) {
      copy.push(copy[i]);
    }
    console.log(copy);
    setCurrentImagesList(copy);
  }, [])

  useEffect(() => {
    if (fullFeaturedImgIndex !== 0) slideUp(fullFeaturedImgIndex);
  }, [fullFeaturedImgIndex]);

  const containerMouseEventHandler: MouseEventHandler = () => {
    setIsHovered(!isHovered);
  }

  const handleSlideUpAnimation = () => {
    let lastClickStartTime = Date.now();
    return () => {
      const now = Date.now();
      const timeSincelastAnimation = now - lastClickStartTime;
      if (timeSincelastAnimation < 150) {
        return;
      };
      lastClickStartTime = now;
      slideUp();
    }
  }

  const handleSlideDownAnimation = () => {
    let lastClickStartTime = Date.now();
    return () => {
      const now = Date.now();
      const timeSincelastAnimation = now - lastClickStartTime;
      if (timeSincelastAnimation < 150) {
        return;
      };
      lastClickStartTime = now;
      slideDown();
    }
  }

  const slideUp = (iterationCount = 1) => {
    const currentImagesListCopy = formatListForSlideUp(iterationCount);
    setShouldAnimate(true);
    setImageListMarginTop(-102 * iterationCount);
    setTimeout(() => {
      setShouldAnimate(false);
      setImageListMarginTop(0);
      setCurrentImagesList(currentImagesListCopy!);
      setFeaturedImg(currentImagesListCopy![0]);
      setFullFeaturedImgIndex(0);
    }, 510);
  }

  const slideDown = () => {
    setShouldAnimate(false);
    setImageListMarginTop(-102);
    const currentImagesListCopy = formatListForSlideDown();
    setCurrentImagesList(currentImagesListCopy);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setShouldAnimate(true);
        setImageListMarginTop(0);
        setFeaturedImg(currentImagesListCopy![0]);
        setFullFeaturedImgIndex(0);
      });
    });
  }

  const formatListForSlideUp = (iterationCount = 1) => {
    const currentImagesListCopy = currentImagesListRef.current.slice(0);
    currentImagesListCopy.splice(0, iterationCount);
    console.log(currentImagesListCopy);
    for (let i = iterationCount - 1; i >= 0; i--) {
      currentImagesListCopy.push(currentImagesListCopy[i]);
    }
    return currentImagesListCopy;
  }

  const formatListForSlideDown = () => {
    const currentImagesListCopy = currentImagesList.slice(0);
    const newFirstItem = currentImagesListCopy[currentImagesList.length - (images.length - 2)];
    currentImagesListCopy.pop();
    currentImagesListCopy.unshift(newFirstItem);
    return currentImagesListCopy;
  }

  const handleUpButtonClick = handleSlideDownAnimation();
  const handleDownButtonClick = handleSlideUpAnimation();

  const firstUrl = currentImagesList[0];
  return (
    <Container onMouseOver={containerMouseEventHandler } onMouseOut={containerMouseEventHandler} >
      <CarouselButton isHovered={isHovered} onClick={handleUpButtonClick}>
        <CarouselSVG width="24" height="24" xmlns="http://www.w3.org/2000/CarouselSVG" fill-rule="evenodd" clip-rule="evenodd">
          <path d="M23.245 20l-11.245-14.374-11.219 14.374-.781-.619 12-15.381 12 15.391-.755.609z" />
        </CarouselSVG>
      </CarouselButton>
      <ImageListContainer >
        <ImageList data-margin-top={imageListMarginTop} data-should-animate={shouldAnimate} onMouseLeave={() => imgListMouseLeaveHandler(firstUrl)}>
          {currentImagesList.map((image, index) => (
            <Img
              src={image}
              featured={fullFeaturedImgIndex === index}
              onMouseOver={imgMouseOverHandler}
              onClick={() => imgClickHandler(index, firstUrl)}
            />
          ))}
      </ImageList>
      </ImageListContainer>
      <CarouselButton isHovered={isHovered} onClick={handleDownButtonClick}>
        <CarouselSVG width="24" height="24" xmlns="http://www.w3.org/2000/CarouselSVG" fill-rule="evenodd" clip-rule="evenodd">
          <path d="M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z" />
        </CarouselSVG>
      </CarouselButton>
    </Container>
  );
}