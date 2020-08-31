import React, { MouseEventHandler } from 'react';
import { ImageList, Img } from './styles';

interface Props {
  images: Array<string>;
  imgListMouseLeaveHandler: (url: string) => void;
  imgClickHandler: (index: number, firstUrl: string) => void;
  fullFeaturedImgIndex: number;
  imgMouseOverHandler: MouseEventHandler;
}

export const ProductImagesList: React.FC<Props> = ({
  images,
  imgListMouseLeaveHandler,
  imgClickHandler,
  fullFeaturedImgIndex,
  imgMouseOverHandler
}) => {
  return (
    <ImageList
      data-margin-top={0}
      data-should-animate={false}
      onMouseLeave={() => imgListMouseLeaveHandler(images[fullFeaturedImgIndex])}
    >
      {images.map((image, index) => (
        <Img
          src={image}
          featured={fullFeaturedImgIndex === index}
          onMouseOver={imgMouseOverHandler}
          onClick={() => imgClickHandler(index, image)}
        />
      ))}
    </ImageList>
  )
}