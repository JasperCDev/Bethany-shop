import styled, { createGlobalStyle } from 'styled-components';
import { MainBackgroundColor, MainHeaderBackgroundColor, MainTitleColor, LighterPink, BorderColor, MainPink, DarkBlue, DarkPink, } from './styleVariables';




export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    height: 100%;
  }

  #root {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    background: ${MainBackgroundColor};
  }
`;

export const Header = styled.div`
  background-color: ${MainHeaderBackgroundColor};
  height: 9vh;
  border-bottom: 1px solid grey;
  display: flex;
  justify-content: flex-start;
  align-items: left;
  flex-direction: row;
  overflow: hidden;
`;

export const Title = styled.div`
  font-size: 5vh;
  font-family: Georgia, 'Times New Roman', Times, serif;
  padding-left: 20px;
  letter-spacing: 4px;
  font-style: italic;
  padding: 0 auto;
  font-weight: 900;
  -webkit-text-fill-color: ${MainTitleColor};
  -webkit-text-stroke-width: 0.07rem;
  -webkit-text-stroke-color: ${BorderColor};
  transition: all .5s ease-in-out;
  cursor: pointer;
`;

export const Subtitle = styled.div`
  font-size: 1rem;
  padding-top: 0.2rem;
  font-style: italic;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: ${BorderColor};
  padding-left: 20px;
`;

export const ShoppingCartButton = styled.button`
  margin: auto;
  margin-left: auto;
  font-size: 1em;
  min-width: 9em;
  min-height: 2em;
  outline: none;
  border: 0.5px solid ${BorderColor};
  background-color: ${LighterPink};
  transition: all .3s ease-in-out;
  &:hover {
    background-color: ${MainPink};
    transform: scale(1.2);
  }
  &:active {
    background-color: ${DarkPink};
    color: ${LighterPink};
    letter-spacing: 1.2;
  }
`;

export const ShoppingCartLink = styled.div`
  margin: auto;
  padding: 0.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const ShoppingCartText = styled.p`
  padding-right: 1em;
`;

export const AboutButton = styled.button`
  margin: auto;
  font-size: 1em;
  width: 9em;
  height: 2em;
  outline: none;
  border: 0.5px solid ${BorderColor};
  background-color: ${LighterPink};
  transition: all .3s ease-in-out;
  &:hover {
    background-color: ${MainPink};
    transform: scale(1.2);
  }

  &:active {
    background-color: ${DarkPink};
    color: ${LighterPink};
    letter-spacing: 1.2;
  }
`;

export const AboutLink = styled.div`
   margin: auto;
`;

export const ProductListDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  padding-top: 3em;
  width: 45vw;
  margin: auto;
  overflow: hidden;
  white-space: nowrap;
`;

export const ProductDiv = styled.div`
  padding: 20px 10px;
  margin: auto;
  overflow: hidden;
  white-space: nowrap;
  width: 190px;
`;

export const ProductTitle = styled.h3`
  /* padding-bottom: 0.3rem; */
  font-size: 1.2rem;
`;

export const ProductImgContainer = styled.div`
  overflow: hidden;
  width: 180px;
  border: 1px solid ${BorderColor};
`;

export const ProductImg = styled.img`
  transition: transform .2s ease;
  &:hover {
    transform: scale(1.5);
    cursor: pointer;
  }
`;

export const ProductDescription = styled.h3`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: 100;
  font-size: 1rem;
`;

export const FooterSection = styled.footer`
  display: flex;
  flex-direction: row;
  background-color: #bbeafa;
  padding: 20px;
  border-top: 1px solid ${BorderColor};
`;

