import styled from 'styled-components';
import { LightBlue, DarkBlue, LighterPink, MainPink, DarkPink } from '../styleVariables';

export const ProductPageMain = styled.div`
  display: flex;
  /* width: 50%;
  height: 75%; */
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: auto;
  /* display: block; */
  position: static;
  padding-top: 10vh;
`;

export const Preview = styled.div`
  width: 400px;
  height: 500px;
  display: flex;
`;

export const Purchasing = styled.div`
  width: 30vw;
  height: 500px;
  padding: 20px;
  margin-left: 3vw;
`;


export const AddToCartButton = styled.button`
  margin-top: 15rem;
  display: block;
  width: 80%;
  height: 4rem;
  font-size: 1.5rem;
  background-color: ${LightBlue};
  border: 1px solid black;
  outline: none;
  transition: all .2s ease-in-out;
  &:hover {
    background-color: #0076b5;
    transform: scale(1.2);
  }
  &:active {
    letter-spacing: 1.5;
    background-color: ${DarkBlue};
    color: ${LighterPink};
  }
`;

export const ProductTitle = styled.h1`

`;

// Product Page Images List

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -72px;
  align-items: center;
  height: 628px;
`;

export const CarouselSVG = styled.svg``;

export const CarouselButton = styled.button.attrs((props: {
  isHovered: boolean;
}) => { })`
  background: none;
	border: 1px solid grey;
  border-radius: 50%;
	cursor: pointer;
	outline: none;
  font-weight: 500;
  font-size: 2.5rem;
  height: 2.5rem;
  width: 2.5rem;
  line-height: 2.5rem;
  opacity: ${({ isHovered }) => isHovered ? '1' : '0'};
  transition: all .3s ease-in-out;
  margin: 1rem 0rem;
  &:hover {

    transform: scale(1.2);
    border-width: 1.5px;

  }
  &:active {
    background-color: ${MainPink};
    transform: scale(1.4);
  }
  &:active ${CarouselSVG} {
    fill: ${LighterPink};
  }
`;

export const ImageListContainer = styled.div`
  height: 415px;
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
  height: 721px;
  overflow: hidden;
  position: relative;
  margin-top: ${(props) => props['data-margin-top'] + 'px'};
  transition: all ${(props) => props['data-should-animate'] ? '0.5s' : '0s'} ease-in;
`;

export const Img = styled.img.attrs((props: {
  onMouseOver: () => void;
  featured: boolean;
  'data-translate-px': number;
}) => { })`
  margin: 10px 0px;
  width: ${({ featured }) => featured ? '61px' : '59px'};
  height: ${({ featured }) => featured ? '84px' : '82px'};
  cursor: pointer;
  border: ${({ featured }) => featured ? '1px solid black' : 'none'};
  position: relative;
`;

// Product Page Main Img

export const OverflowContainer = styled.div`
  overflow: hidden;
  width: 340px;
  height: 408px;
`;

export const ImgContainer = styled.div.attrs((props) => {
})`
  background-repeat: no-repeat;
  width: 340px;
  height: 408px;
  background-image: ${(props) => 'url(' + props['data-url'] + ')'};
  background-size: contain;
  cursor: pointer;
  background-position-x: ${(props) => (props['data-x-position'] && props['data-x-position'] - (378 / 2)) + 'px'};
  background-position-y: ${(props) => (props['data-x-position'] && props['data-y-position'] - (415 / 2)) + 'px'};
  transition: background-image .3s ease-in;
  &:hover {
    transform: scale(2);
  }
`;