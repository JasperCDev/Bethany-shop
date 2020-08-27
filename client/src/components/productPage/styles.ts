import styled from 'styled-components';
import { MainTitleColor } from '../styleVariables';

export const ProductPageMain = styled.div`
  display: flex;
  width: 90%;
  height: 90%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: 30px;
`;

export const Preview = styled.div`
  width: 500px;
  height: 600px;
  display: flex;
`;

export const Purchasing = styled.div`
  width: 500px;
  height: 600px;
  padding: 20px;
`;


export const AddToCartButton = styled.button`
  margin-top: 20rem;
  display: block;
  width: 80%;
  height: 4rem;
  font-size: 1.5rem;
  background-color: #5a93e8;
  &:hover {
    background-color: #2d75e0;
  }
`;

export const ProductTitle = styled.h1`

`;

// Product Page Images List

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -2.5rem;
  align-items: center;
`;

export const CarouselButton = styled.button.attrs((props: {
  isHovered: boolean;
}) => { })`
  background: none;
	border: none;
	cursor: pointer;
	outline: none;
  font-weight: 500;
  font-size: 2.5rem;
  border: none;
  height: 2.5rem;
  width: 2.5rem;
  line-height: 2.5rem;
  opacity: ${({ isHovered }) => isHovered ? '1' : '0'};
  transition: all .5s ease-in-out;
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
  height: 619px;
  overflow: hidden;
  position: relative;
  margin-top: ${(props) => props['data-margin-top'] + 'px'};
  transition: all ${(props) => props['data-should-animate'] ? '.4s' : '0s'} ease-in;
`;

export const Img = styled.img.attrs((props: {
  onMouseOver: () => void;
  featured: boolean;
  'data-translate-px': number;
}) => { })`
  margin: 10px 0px;
  width: 59;
  height: 82;
  cursor: pointer;
  border: ${({ featured }) => featured ? '1px solid black' : 'none'};
  position: relative;
`;

// Product Page Main Img

export const OverflowContainer = styled.div`
  overflow: hidden;
  width: 350px;
  height: 415px;
`;

export const ImgContainer = styled.div.attrs((props) => {
})`
  background-repeat: no-repeat;
  width: 378px;
  height: 415px;
  background-image: ${(props) => 'url(' + props['data-url'] + ')'};
  background-size: contain;
  cursor: pointer;
  background-position-x: ${(props) => (props['data-x-position'] && props['data-x-position'] - (378 / 2)) + 'px'};
  background-position-y: ${(props) => (props['data-x-position'] && props['data-y-position'] - (415 / 2)) + 'px'};
  &:hover {
    transform: scale(2);
  }
`;