import React from 'react';
import { Product } from './interfaces';

interface Props {
  product: Product;
}

export const ProductListing: React.FC<Props> = ({ product }) => {
  return (
    <div className="product">
      <div className="product-img-container">
        <img className="product-img" src={product.imageMainUrl} width="250" height="275" />
      </div>
      <h3 className="product-title">{product.title}</h3>
      <h3 className="product-description">{product.description}</h3>
      <h2 className="product-price">${product.price.toString()}</h2>
    </div>
  );
}
