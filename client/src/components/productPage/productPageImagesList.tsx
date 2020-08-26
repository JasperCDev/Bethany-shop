import React, { useState, MouseEventHandler, useEffect } from 'react';
import { Container, CarouselButton, ImageList, Img, ImageListContainer} from './styles';

interface Props {
  images: Array<string>;
  imgMouseOverHandler: MouseEventHandler;
  featuredImg: string;
}



export const ProductPageImagesList: React.FC<Props> = ({ images, imgMouseOverHandler, featuredImg }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [currentImagesList, setCurrentImagesList] = useState<Array<string>>([]);
  const [translatePX, setTranslatePX] = useState<number>(0);

  useEffect(() => {
    images.unshift(images[images.length - 1]);
    setCurrentImagesList(images);
  }, []);

  const containerMouseEventHandler: MouseEventHandler = () => {
    setIsHovered(!isHovered);
  }

  const handleDownButtonClick = () => {
    // const copy = currentImagesList.slice(0);
    // const popped = copy.pop();
    // copy.unshift(popped!);
    console.log('here');
    setTranslatePX(translatePX + 98);
  }


  const handleUpButtonClick = () => {
    // const copy = currentImagesList.slice(0);
    // const shifted = copy.shift();
    // copy.push(shifted!);
    setTranslatePX(translatePX + -98);
  }


  return (
    <Container onMouseOver={containerMouseEventHandler } onMouseOut={containerMouseEventHandler}>
      <CarouselButton isHovered={isHovered} onClick={handleUpButtonClick}>
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
          <path d="M23.245 20l-11.245-14.374-11.219 14.374-.781-.619 12-15.381 12 15.391-.755.609z" />
        </svg>
      </CarouselButton>
      <ImageListContainer>
      <ImageList >
        {currentImagesList.map((image) => (
          <Img
            src={image} featured={featuredImg === image} onMouseOver={imgMouseOverHandler} data-translate-px={translatePX}
          />
        ))}
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