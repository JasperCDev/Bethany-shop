import React, { useState, useEffect } from 'react';
import { Product } from './interfaces';
import { ProductPageMain, Preview, Purchasing, GlobalStyle, ProductImg } from './styles';
import { match } from 'react-router-dom';
import { dummyProducts } from '../../dummyProducts';
import { MainHeader } from './mainHeader'

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
            <ProductImg src={product!.imageMainUrl} width="250" height="275" />
          </Preview>
          <Purchasing></Purchasing>
        </ProductPageMain>
      </>

    );
  }
}