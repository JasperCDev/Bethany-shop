import React, { MouseEventHandler, useState, useEffect } from 'react';
import styled from 'styled-components';

interface Props {
  url: string;

}

const OverflowContainer = styled.div`
  overflow: hidden;
  width: 350px;
  height: 415px;
`;

const ImgContainer = styled.div.attrs((props) => {
})`
  background-repeat: no-repeat;
  width: 350px;
  height: 415px;
  background-image: ${(props) => 'url(' + props['data-url'] + ')'};
  background-size: contain;
  cursor: pointer;
  background-position-x: ${(props) => (props['data-x-position'] && props['data-x-position'] - (350 / 2)) + 'px'};
  background-position-y: ${(props) => (props['data-x-position'] && props['data-y-position'] - (415 / 2)) + 'px'};
  &:hover {
    transform: scale(2);
  }
`;


export const ProductPageMainImg: React.FC<Props> = ({ url }) => {
  const [XPosition, setXPosition] = useState<number>(0);
  const [YPosition, setYPosition] = useState<number>(0);

  const animateOnMouseMove: MouseEventHandler = (e) => {
    let lastAnimationTime = Date.now();
    return (event: typeof e) => {
      const currentTime = Date.now();
      const timePassedSinceLastExecution = currentTime - lastAnimationTime;
      if (timePassedSinceLastExecution >= 10) {
        console.log('ran!');
        lastAnimationTime = currentTime;
        setXPosition(event.nativeEvent.offsetX);
        setYPosition(event.nativeEvent.offsetY);
      } else {
        console.log('thrown out!');
      }
    }
  };

  const handleMouseMove = animateOnMouseMove(undefined as any);

  return (
    <OverflowContainer>
      <ImgContainer
        data-x-position={XPosition}
        data-y-position={YPosition}
        data-url={url}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => {
          setXPosition(0);
          setYPosition(0);
        }}
      >
      </ImgContainer>
    </OverflowContainer>
  );
}