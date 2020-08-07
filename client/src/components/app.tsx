import React, { useState, useEffect } from 'react';
import { ProductList } from './productList';
import { dummyProducts } from '../../dummyProducts';
import { Footer } from './footer';
import { SearchBar } from './searchBar';
import { ShoppingCart } from '@material-ui/icons';
import { allListings } from './listingContext';
import { Product } from './interfaces';


export const App: React.FC = () => {
  const [products, setProducts] = useState<Array<Product>>([]);

  useEffect(() => {
    setProducts(dummyProducts);
  }, []);

  return (
    <>
      <header className="header">
        <div className="main-logo">
          <div className="title">Bethany's Shop</div>
          <div className="subtitle">Womens Athletic Wear and Homemade Jewelery</div>
        </div>
        <button className="shopping-cart-button">
          <div className="shopping-cart-link">
            <p className="shopping-cart-text">Shopping Cart</p>
            <ShoppingCart fontSize="inherit" />
          </div>
        </button>
        <button className="about-button">
        <div className="about-link">About</div>
        </button>
      </header>
        <ProductList products={products} />
      <Footer />
    </>
  )
}

