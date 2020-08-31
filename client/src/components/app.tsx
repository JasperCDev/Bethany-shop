import React, { useState, useEffect } from 'react';
import { MainHeader } from './mainHeader';
import { ProductList } from './productList';
import { dummyProducts } from '../../dummyProducts';
import { Footer } from './footer';
import { Product } from './interfaces';
import { GlobalStyle } from './styles';


export const App: React.FC = () => {
  const [products, setProducts] = useState<Array<Product>>([]);

  useEffect(() => {
    setProducts(dummyProducts);
  }, []);

  return (
    <>
      <GlobalStyle />
      <MainHeader />
      <ProductList products={products} />
      {/* <Footer /> */}
    </>
  )
}

