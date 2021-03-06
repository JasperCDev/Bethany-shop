import styled, { createGlobalStyle } from 'styled-components';
import { MainBackgroundColor, MainHeaderBackgroundColor, MainTitleColor, LighterPink, BorderColor, MainPink, DarkBlue, DarkPink, FontColor, DarkGrey, } from './styleVariables';




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
    color: ${FontColor};
  }
`;

export const Header = styled.div`
  background-color: ${MainHeaderBackgroundColor};
  height: 9vh;
  border-bottom: 1px solid ${BorderColor};
  display: flex;
  position: sticky;
  top: 0;
  justify-content: flex-start;
  align-items: left;
  flex-direction: row;
  overflow: hidden;
  /* @media (orientation: portrait) {
    height: 7vh;
  } */
`;

export const Title = styled.div`
  font-size: 5vh;
  font-family: Georgia, 'Times New Roman', Times, serif;
  padding-left: 20px;
  letter-spacing: 4px;
  font-style: italic;
  padding: 0 auto;
  font-weight: 1000;
  letter-spacing: 3;
  -webkit-text-fill-color: ${MainTitleColor};
  -webkit-text-stroke-width: 0.07rem;
  -webkit-text-stroke-color: ${BorderColor};
  transition: -webkit-text-fill-color .5s ease-in-out;
  cursor: pointer;
  &:hover {
    -webkit-text-fill-color: black;
  }
  @media (orientation: portrait) {
    font-size: 4vh;
  }
`;

export const Subtitle = styled.div`
  font-size: 2vh;
  padding-top: 0.2rem;
  font-style: italic;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding-left: 20px;
  @media (orientation: portrait) {
    font-size: 1.5vh;
  }
`;

export const ShoppingCartButton = styled.button`
  margin: auto;
  margin-right: 15vw;
  font-size: 1.5em;
  width: 8vw;
  height: 4vh;
  outline: none;
  border: 0.5px solid ${BorderColor};
  background-color: ${LighterPink};
  transition: color .3s ease-in-out, background-color .3s ease-in-out, transform .3s ease-in-out;
  color: ${DarkGrey};
  &:hover {
    background-color: ${MainPink};
    transform: scale(1.2);
    color: black;
  }
  &:active {
    background-color: ${DarkPink};
    color: ${LighterPink};
    letter-spacing: 1.2;
  }
  @media (orientation: portrait) {
    margin: auto;
    width: 12vw;
  }
`;

export const ShoppingCartLink = styled.div`
  margin: auto;
  /* padding: 0.5em; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const ShoppingCartText = styled.p`
  padding-right: 1em;
  align-self: center;
`;

// export const AboutButton = styled.button`
//   margin: auto;
//   font-size: 1em;
//   width: 9em;
//   height: 2em;
//   outline: none;
//   border: 0.5px solid ${BorderColor};
//   background-color: ${LighterPink};
//   transition: all .3s ease-in-out;
//   color: ${DarkGrey};
//   &:hover {
//     background-color: ${MainPink};
//     transform: scale(1.2);
//   }

//   &:active {
//     background-color: ${DarkPink};
//     color: ${LighterPink};
//     letter-spacing: 1.2;
//   }
// `;

// export const AboutLink = styled.div`
//    margin: auto;
// `;

export const ProductListDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  padding-top: 3em;
  width: 900px;
  margin: auto;
  overflow: hidden;
  white-space: nowrap;
  @media (orientation: portrait) {
    display: flex;
    flex-direction: column;
  }
`;

export const ProductDiv = styled.div`
  padding: 20px 10px;
  margin: auto;
  overflow: hidden;
  white-space: nowrap;
  width: 200px;
  text-overflow: ellipsis;
  @media (orientation: portrait) {
    display: flex;
    flex-direction: row;
    margin: auto;
    width: 90%;
    padding: auto;
  }
`;

export const ProductImgContainer = styled.div`
  overflow: hidden;
  width: 186px;
  height: 230px;
  border: 0.5px solid ${BorderColor};
`;

export const ProductImg = styled.img`
  transition: transform .2s ease;
  width: 186px;
  height: 230px;
  &:hover {
    transform: scale(1.5);
    cursor: pointer;
  }
`;

export const ProductInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  white-space: pre-line;
  @media (orientation: portrait) {
    width: 80%;
    margin-left: 5vw;
    padding-bottom: 1rem;
  }
`;

export const ProductTitle = styled.h3`
  font-size: 1rem;
  @media (orientation: portrait) {
    font-size: 2.5rem;
    padding-bottom: 1rem;
  }
`;

export const ProductDescription = styled.div`
  overflow: hidden;

  text-overflow: ellipsis;
  font-weight: 100;
  font-size: 16px;
  width: 100%;
  height: 36px;

  @media (orientation: portrait) {
    font-size: 1.4rem;
    font-size: 2rem;
    white-space: pre-line;
    padding-bottom: 1rem;
    height: 115px;
  }
`;

export const ProductDescriptionP = styled.p`
  /* white-space: nowrap;
  /* text-overflow: ellipsis; */
  width: 300px;
  height: 36px;
  white-space: pre-wrap;
  @media (orientation: portrait) {
    font-size: 1.4rem;
    font-size: 2rem;
    white-space: pre-line;
    padding-bottom: 1rem;
    height: 115px;
    width: 90%;
    margin: 0;
  }
`;


export const ProductPrice = styled.h1`
font-size: 1.5rem;
  @media (orientation: portrait) {
    font-size: 2.3rem;
  }
`;

// export const FooterSection = styled.footer`
//   display: flex;
//   flex-direction: row;
//   background-color: #bbeafa;
//   padding: 20px;
//   border-top: 1px solid ${BorderColor};
// `;