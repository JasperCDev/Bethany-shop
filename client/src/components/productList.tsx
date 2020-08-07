import React, { useContext } from 'react';
import { ProductListing } from './productListing';
import { Product } from './interfaces';
import { ProductListDiv} from './styles';


export const ProductList: React.FC<{products: Array<Product>;}> = ({ products }) => {
  return (
    <ProductListDiv>
      {products.map((product: Product) => <ProductListing product={product} key={product.id}/>)}
    </ProductListDiv>
  );
}