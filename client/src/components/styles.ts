import styled, { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    height: 100%;
    background: #e3f8ff;

  }

  #root {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
  }
`;

export const Header = styled.div`
  background-color: #bbeafa;
  height: 9%;
  border-bottom: 2px solid black;
  display: flex;
  justify-content: flex-start;
  align-items: left;
  flex-direction: row;
  overflow: hidden;
`;

export const Title = styled.div`
  font-size: 2em;
  font-family: Georgia, 'Times New Roman', Times, serif;
  padding-left: 20px;
  letter-spacing: 4px;
  font-style: italic;
  padding: 0 auto;
  font-weight: bold;
  -webkit-text-fill-color: #2776f5;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
`;

export const Subtitle = styled.div`
  font-size: 1em;
  padding-top: 0.3em;
  font-style: italic;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: black;
  padding-left: 20px;
`;

/* .searchForm {
  justify-self: flex-end;
  align-self: right;
  padding-right: 20px;
  margin: auto;
  width: 5em;
  height: 10em;
} */

export const ShoppingCartButton = styled.button`
  margin: auto;
  margin-left: 35em;
  font-size: 1em;
  width: 9em;
  height: 2em;
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
`;

export const AboutLink = styled.div`
   margin: auto;
`;

export const ProductListDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  padding-top: 3em;
  width: 55vw;
  margin: auto;
  overflow: hidden;
  white-space: nowrap;
`;

export const ProductDiv = styled.div`
  padding: 20px 10px;
  margin: auto;
  overflow: hidden;
  white-space: nowrap;
  width: 18em;
`;

export const ProductTitle = styled.h3`
  padding-bottom: 5px;
`;

export const ProductImgContainer = styled.div`
  overflow: hidden;
  width: 250px;
  border: 1px solid black;
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
`;

// product page

export const ProductPageMain = styled.div`
  display: flex;
  width: 80vw;
  height: 80vh;
  flex-direction: row;
  margin: auto;
  border: 1px solid black;
`;

export const Preview = styled.div`
  width: 500px;
  height: 600px;
  border: 1px solid black;
`;

export const Purchasing = styled.div`
  width: 500px;
  height: 600px;
  border: 1px solid black;
`;
