import React from 'react';
import { Product } from './interfaces';
import { ProductDiv, ProductImg, ProductImgContainer, ProductDescription, ProductTitle } from './styles';

interface Props {
  product: Product;
}

export const ProductListing: React.FC<Props> = ({ product }) => {
  return (
    <ProductDiv>
      <ProductImgContainer>
        <ProductImg src={product.imageMainUrl} width="250" height="275" />
      </ProductImgContainer>
      <ProductTitle>{product.title}</ProductTitle>
      <ProductDescription >{product.description}</ProductDescription>
      <h2>${product.price.toString()}</h2>
    </ProductDiv>
  );
}
