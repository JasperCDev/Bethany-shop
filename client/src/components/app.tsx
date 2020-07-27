import React, { useState, useEffect } from 'react';
import { ProductList } from './productList';
import { dummyProducts } from '../../dummyProducts';

export interface Product {
  id: number;
  imageMainUrl: string;
  images: Array<string>;
  description: string;
  price: number;
  title: string;
}

export const App: React.FC = () => {
  const [products, setProducts] = useState<Array<Product>>([]);

  useEffect(() => {
    setProducts(dummyProducts);
  }, []);

  return (
    <>
      <header className="header">
        <div className="title">Bethany's Shop</div>
        <div className="subtitle">Womens Athletic Wear and Homemade Jewelery </div>
      </header>
      <ProductList products={products}/>
    </>
  )
}

