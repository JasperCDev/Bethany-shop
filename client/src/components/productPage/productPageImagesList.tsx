import React, { useState, MouseEventHandler, useEffect, useRef } from 'react';
import { Container, CarouselButton, ImageList, Img, ImageListContainer} from './styles';

interface Props {
  images: Array<string>;
  imgMouseOverHandler: MouseEventHandler;
  featuredImg: string;
  imgMouseOutHandler: () => void;
  fullFeaturedImgIndex: number;
  imgClickHandler: (index: number, url: string) => void;
}

export const ProductPageImagesList: React.FC<Props> = ({ images, imgMouseOverHandler, featuredImg, imgMouseOutHandler, fullFeaturedImgIndex, imgClickHandler }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [currentImagesList, setCurrentImagesList] = useState<Array<string>>(images);
  const [imageListMarginTop, setImageListMarginTop] = useState<number>(0);
  const [shouldAnimate, setShouldAnimate] = useState<boolean>(false);


  const containerMouseEventHandler: MouseEventHandler = () => {
    setIsHovered(!isHovered);
  }

  const handleSlideUpAnimation = () => {
    let lastClickStartTime = Date.now();
    return () => {
      const now = Date.now();
      const timeSincelastAnimation = now - lastClickStartTime;
      console.log(timeSincelastAnimation);
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

  const slideUp = () => {
    const copy = formatListForSlideUp();
    setShouldAnimate(true);
    setImageListMarginTop(-102);
    setTimeout(() => {
      setShouldAnimate(false);
      setImageListMarginTop(0);
      setCurrentImagesList(copy);
    }, 520);
  }

  const slideDown = () => {
    setShouldAnimate(false);
    setImageListMarginTop(-102);
    setCurrentImagesList(formatListForSlideDown());
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setShouldAnimate(true);
        setImageListMarginTop(0);
      });
    });
  }

  const formatListForSlideUp = () => {
    const copy = currentImagesList.slice(0);
    const shifted = copy.shift();
    copy.push(shifted!);
    return copy;
  }

  const formatListForSlideDown = () => {
    const copy = currentImagesList.slice(0);
    const popped = copy.pop();
    copy.unshift(popped!);
    return copy;
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