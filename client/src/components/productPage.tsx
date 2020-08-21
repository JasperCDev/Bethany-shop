import React, { useState, useEffect } from 'react';
import { Product } from './interfaces';
import { GlobalStyle, ProductImg } from './styles';
import { match } from 'react-router-dom';
import { dummyProducts } from '../../dummyProducts';
import { MainHeader } from './mainHeader';
import styled from 'styled-components';
import { ProductPageMainImg } from './productPageMainImg';

const ProductPageMain = styled.div`
  display: flex;
  width: 90%;
  height: 90%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: auto;
  border: 1px solid black;
  padding: 20px;
`;

const Preview = styled.div`
  width: 500px;
  height: 600px;
  border: 1px solid black;
`;

const Purchasing = styled.div`
  width: 500px;
  height: 600px;
  border: 1px solid black;
  padding: 20px;
`;


const AddToCartButton = styled.button`
  margin-top: 20rem;
  display: block;
  width: 80%;
  height: 4rem;
  font-size: 1.5rem;
  background-color: orange;
  &:hover {
    background-color: darkorange;
  }
`;

const ProductTitle = styled.h1`

`;


interface Params {
  id: string | undefined;
}

interface Props {
  match: match<Params>;
}

export const ProductPage: React.FC<Props> = ({ match: {params: { id }} }) => {
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    for (let listing of dummyProducts) {
      if (listing.id === Number(id)) {
        setProduct(listing);
      }
    }
  }, []);

  if (!product) {
    return <h1>LOADING</h1>
  } else {
    return (
      <>
        <GlobalStyle />
        <MainHeader />
        <ProductPageMain>
          <Preview>
            <ProductPageMainImg url={product!.imageMainUrl} />
          </Preview>
          <Purchasing>
            <ProductTitle>{product.title}</ProductTitle>
            <h2 style={{ display: 'inline', paddingRight: '5px' }}>
              ${product.price}</h2>
            <h4 style={{ color: 'gray', display: 'inline' }}>
              + {product.shipping} shipping
            </h4>
            <AddToCartButton>
              Add to Cart
            </AddToCartButton>
          </Purchasing>
        </ProductPageMain>
      </>

    );
  }
}