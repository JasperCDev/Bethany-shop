import React from 'react';
import { Product } from './interfaces';
import { ProductDiv, ProductImg, ProductImgContainer, ProductDescription, ProductTitle } from './styles';
import { Link } from 'react-router-dom';
interface Props {
  product: Product;
}

export const ProductListing: React.FC<Props> = ({ product }) => {
  return (
    <Link to={`/listing/${product.id}`} style={{textDecoration: 'none', color: 'black'}}>
      <ProductDiv>
        <ProductImgContainer>
          <ProductImg src={product.imageMainUrl} width="190" height="220" />
        </ProductImgContainer>
        <ProductTitle>{product.title}</ProductTitle>
        <ProductDescription >{product.description}</ProductDescription>
        <h3>${product.price.toString()}</h3>
      </ProductDiv>
    </Link>

  );
}
