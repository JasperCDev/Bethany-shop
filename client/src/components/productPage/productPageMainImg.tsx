import React, { MouseEventHandler, useState, useEffect } from 'react';
import { OverflowContainer, ImgContainer } from './styles';

interface Props {
  url: string;

}




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
        animationCount = 0;
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