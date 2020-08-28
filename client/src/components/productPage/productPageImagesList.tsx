import React, { useState, MouseEventHandler, useEffect, useRef } from 'react';
import { Container, CarouselButton, ImageList, Img, ImageListContainer} from './styles';

interface Props {
  images: Array<string>;
  imgMouseOverHandler: MouseEventHandler;
  featuredImg: string;
  imgMouseOutHandler: () => void;
  fullFeaturedImgIndex: number;
  imgClickHandler: (index: number, url: string) => void;
  setFullFeaturedImgIndex: React.Dispatch<React.SetStateAction<number>>;
  setFeaturedImg: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export const ProductPageImagesList: React.FC<Props> = ({
  images,
  imgMouseOverHandler,
  featuredImg,
  imgMouseOutHandler,
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
    copy.push(copy[0]);
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
      });
    });
  }

  const formatListForSlideUp = (iterationCount = 1) => {
    const currentImagesListCopy = currentImagesListRef.current.slice(0);
    currentImagesListCopy.shift();
    for (let i = 1; i < iterationCount; i++) {
      let shifted = currentImagesListCopy.shift();
      currentImagesListCopy.push(shifted);
    }
    currentImagesListCopy.push(currentImagesListCopy[0]);
    return currentImagesListCopy;
  }

  const formatListForSlideDown = () => {
    const currentImagesListCopy = currentImagesList.slice(0);
    const popped = currentImagesListCopy.pop();
    currentImagesListCopy.unshift(popped!);
    return currentImagesListCopy;
  }

  const handleUpButtonClick = handleSlideDownAnimation();
  const handleDownButtonClick = handleSlideUpAnimation();

  return (
    <Container onMouseOver={containerMouseEventHandler } onMouseOut={containerMouseEventHandler}>
      <CarouselButton isHovered={isHovered} onClick={handleUpButtonClick}>
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
          <path d="M23.245 20l-11.245-14.374-11.219 14.374-.781-.619 12-15.381 12 15.391-.755.609z" />
        </svg>
      </CarouselButton>
      <ImageListContainer >
      <ImageList data-margin-top={imageListMarginTop} data-should-animate={shouldAnimate} >
          <Img
            src={currentImagesList[0]}
            featured={fullFeaturedImgIndex === 0}
            onMouseOver={imgMouseOverHandler}
            onMouseOut={imgMouseOutHandler}
            onClick={() => imgClickHandler(0, currentImagesList[0])}
          />
          <Img
            src={currentImagesList[1]}
            featured={fullFeaturedImgIndex === 1}
            onMouseOver={imgMouseOverHandler}
            onMouseOut={imgMouseOutHandler}
            onClick={() => imgClickHandler(1, currentImagesList[1])} />
          <Img
            src={currentImagesList[2]}
            featured={fullFeaturedImgIndex === 2}
            onMouseOver={imgMouseOverHandler}
            onMouseOut={imgMouseOutHandler}
            onClick={() => imgClickHandler(2, currentImagesList[2])}
          />
          <Img
            src={currentImagesList[3]}
            featured={fullFeaturedImgIndex === 3}
            onMouseOver={imgMouseOverHandler}
            onMouseOut={imgMouseOutHandler}
            onClick={() => imgClickHandler(3, currentImagesList[3])}
          />
          <Img
            src={currentImagesList[4]}
            featured={fullFeaturedImgIndex === 4}
            onMouseOver={imgMouseOverHandler}
            onMouseOut={imgMouseOutHandler}
            onClick={() => imgClickHandler(4, currentImagesList[4])}
          />
          <Img
            src={currentImagesList[5]}
            featured={fullFeaturedImgIndex === 5}
            onMouseOver={imgMouseOverHandler}
            onMouseOut={imgMouseOutHandler}
            onClick={() => imgClickHandler(5, currentImagesList[5])}
          />
      </ImageList>
      </ImageListContainer>
      <CarouselButton isHovered={isHovered} onClick={handleDownButtonClick}>
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
          <path d="M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z" />
        </svg>
      </CarouselButton>
    </Container>
  );
}