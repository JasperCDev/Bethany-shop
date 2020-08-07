import React, { useContext } from 'react';
import { ProductListing } from './productListing';
import { Product } from './interfaces';
import { allListings } from './listingContext';

export const ProductList: React.FC<{products: Array<Product>;}> = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product: Product) => <ProductListing product={product} key={product.id}/>)}
    </div>
  );
}