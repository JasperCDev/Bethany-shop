import React from 'react';
import { Product } from './app';

interface Props {
  product: Product;
}

export const ProductListing: React.FC<Props> = ({ product }) => {
  return (
    <div className="product">
      <h3 className="product-title">{product.title}</h3>
      <img className="product-img" src={product.imageMainUrl} width="250" height="300" />
    </div>

  );
}