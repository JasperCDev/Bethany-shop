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
  width: 378px;
  height: 415px;
  background-image: ${(props) => 'url(' + props['data-url'] + ')'};
  background-size: contain;
  cursor: pointer;
  background-position-x: ${(props) => (props['data-x-position'] && props['data-x-position'] - (378 / 2)) + 'px'};
  background-position-y: ${(props) => (props['data-x-position'] && props['data-y-position'] - (672 / 2)) + 'px'};
  &:hover {
    transform: scale(2);
  }
`;


export const ProductPageMainImg: React.FC<Props> = ({ url }) => {
  const [XPosition, setXPosition] = useState<number>(0);
  const [YPosition, setYPosition] = useState<number>(0);

  const animateOnMouseMove: MouseEventHandler = (e) => {
    let animationCount = 0;
    let animationStart = Date.now();
    return (event: typeof e) => {
      animationCount++;
      let newAnimationStart = Date.now();
      let timeSinceLastAnimation = newAnimationStart - animationStart;
      if (animationCount % 5 === 0 || timeSinceLastAnimation >= 5) {
        setXPosition(event.nativeEvent.offsetX);
        setYPosition(event.nativeEvent.offsetY);
        animationStart = newAnimationStart;
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