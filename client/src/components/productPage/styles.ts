import styled from 'styled-components';
import { LightBlue, DarkBlue, LighterPink, MainPink, BorderColor, DarkGrey } from '../styleVariables';

export const ProductPageMain = styled.div`
  display: flex;
  /* width: 50%;
  height: 75%; */
  flex-direction: row;
  align-items: top;
  justify-content: center;
  margin: auto;
  /* display: block; */
  /* position: static; */
  padding-top: 10vh;
`;

export const Preview = styled.div`
  width: 600px;
  height: 1050px;
  display: flex;
`;

export const Purchasing = styled.div`
  width: 600px;
  height: 1050px;
  margin-left: 4vw;
`;


export const AddToCartButton = styled.button`
  display: block;
  width: 80%;
  height: 4rem;
  font-size: 1.5rem;
  background-color: ${LightBlue};
  border: 1px solid ${BorderColor};
  outline: none;
  transition: all .2s ease-in-out;
  margin-top: 160px;
  color: ${DarkGrey};
  &:hover {
    background-color: #0076b5;
    transform: scale(1.2);
    color: black;
  }
  &:active {
    letter-spacing: 1.5;
    background-color: ${DarkBlue};
    color: ${LighterPink};
  }
`;

export const ProductTitle = styled.h1`
  font-size: 400%;
`;

// Product Page Images List

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -92px;
  align-items: center;
  height: 942px;
`;

export const CarouselSVG = styled.svg`
  transform: scale(1.5);
`;

export const CarouselButton = styled.button.attrs((props: {
  isHovered: boolean;
}) => { })`
  background: none;
	border: 1px solid ${BorderColor};
  border-radius: 50%;
	cursor: pointer;
	outline: none;
  font-weight: 500;
  font-size: 2.5rem;
  height: 60px;
  width: 60px;
  line-height: 2.5rem;
  opacity: ${({ isHovered }) => isHovered ? '1' : '0'};
  transition: all .25s ease-in-out;
  margin: 1rem 0rem;
  fill: ${DarkGrey};
  &:hover {
    background-color: ${MainPink};
    transform: scale(1.2);
  }
  &:active {
    transform: scale(1.4);
  }
  &:active ${CarouselSVG} {
    fill: ${LighterPink};
  }
`;

export const ImageListContainer = styled.div`
  height: 612px;
  overflow: hidden;
  display: flex;
  align-items: flex-start;
  justify-content: top;
  flex-direction: column;
  position: relative;
`;

export const ImageList = styled.div.attrs((props) => {})`
  display: flex;
  align-items: flex-start;
  justify-content: top;
  flex-direction: column;
  padding: 0px 10px;
  height: 1200px;
  overflow: hidden;
  /* position: relative; */
  margin-top: ${(props) => props['data-margin-top'] + 'px'};
  transition: all ${(props) => props['data-should-animate'] ? '.5s' : '0s'} ease-in;
`;

export const Img = styled.img.attrs((props: {
  onMouseOver: () => void;
  featured: boolean;
  'data-translate-px': number;
}) => { })`
  margin: 10px 0px;
  max-width: ${({ featured }) => featured ? '90.5px' : '88.5px'};
  max-height: ${({ featured }) => featured ? '135px' : '133px'};
  cursor: pointer;
  border: ${({ featured }) => featured ? '1px solid ' + BorderColor : 'none'};
  /* position: relative; */
`;

// Product Page Main Img

export const OverflowContainer = styled.div`
  overflow: hidden;
  width: 510px;
  height: 612px;
`;

export const ImgContainer = styled.div.attrs((props) => {
})`
  background-repeat: no-repeat;
  width: 510px;
  height: 612px;
  background-image: ${(props) => 'url(' + props['data-url'] + ')'};
  background-size: contain;
  cursor: pointer;
  background-position-x: ${(props) => (props['data-x-position'] && props['data-x-position'] - (510 / 2)) + 'px'};
  background-position-y: ${(props) => (props['data-x-position'] && props['data-y-position'] - (612 / 2)) + 'px'};
  transition: background-image .3s ease-in;
  &:hover {
    transform: scale(2);
  }
`;