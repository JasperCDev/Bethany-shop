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
          <ProductImg src={product.imageMainUrl} width="150" height="190" />
        </ProductImgContainer>
        <ProductTitle>{product.title}</ProductTitle>
        <ProductDescription >{product.description}</ProductDescription>
        <h5>${product.price.toString()}</h5>
      </ProductDiv>
    </Link>

  );
}
