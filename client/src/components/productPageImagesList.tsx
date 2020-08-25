import React, { UIEventHandler } from 'react';
import styled from 'styled-components';

interface Props {
  images: Array<string>;
  imgMouseOverHandler: (e: Event) => void;
  featuredImg: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -3rem;
  align-items: center;
`;

const CarouselButton = styled.button`
  background: none;
  font-weight: 500;
  font-size: 3rem;
  border: none;
  height: 3rem;
  width: 3rem;
  line-height: 3rem;
`;

const ImageList = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: top;
  flex-direction: column;
  padding: 0px 10px;
  height: 415px;
  overflow: hidden;
  position: relative;
  /* margin-top: -10px; */
`;

const Img = styled.img.attrs((props: {
  onMouseOver: () => void;
  featured: boolean;
}) => { })`
  margin: 10px 0px;
  width: ${({ featured }) => featured ? '61' : '59'};
  height: ${({ featured }) => featured ? '84' : '82'};
  cursor: pointer;
  border: ${({ featured }) => featured ? '1px solid black' : 'none'};

  /* border: 1px solid black; */
`;

export const ProductPageImagesList: React.FC<Props> = ({ images, imgMouseOverHandler, featuredImg }) => {


  return (
    <Container>
      <CarouselButton>
        ^
      </CarouselButton>
      <ImageList>
      {images.map((image) => (
        <Img
          src={image} onMouseOver={imgMouseOverHandler} featured={featuredImg === image}
        />
      ))}
    </ImageList>
      <CarouselButton>
        v
      </CarouselButton>
    </Container>
  );
}