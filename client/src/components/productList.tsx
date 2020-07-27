import React from 'react';
import { ProductListing } from './productListing';
import { Product } from './app';

interface Props {
  products: Array<Product>;
}

export const ProductList: React.FC<Props> = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product: Product) => <ProductListing product={product}/>)}

    </div>
  );
}