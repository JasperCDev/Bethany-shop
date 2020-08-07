import React, { useState, useEffect } from 'react';
import { ProductList } from './productList';
import { dummyProducts } from '../../dummyProducts';
import { Footer } from './footer';
import { SearchBar } from './searchBar';
import { ShoppingCart } from '@material-ui/icons';
import { allListings } from './listingContext';
import { Product } from './interfaces';
import { Header, Title, ShoppingCartButton, GlobalStyle, ShoppingCartLink, ShoppingCartText, Subtitle, AboutLink, AboutButton} from './styles';


export const App: React.FC = () => {
  const [products, setProducts] = useState<Array<Product>>([]);

  useEffect(() => {
    setProducts(dummyProducts);
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header>
        <div>
          <Title>Bethany's Shop</Title>
          <Subtitle>Womens Athletic Wear and Homemade Jewelery</Subtitle>
        </div>
        <ShoppingCartButton className="shopping-cart-button">
          <ShoppingCartLink className="shopping-cart-link">
            <ShoppingCartText className="shopping-cart-text">
              Shopping Cart
            </ShoppingCartText>
            <ShoppingCart fontSize="inherit" />
          </ShoppingCartLink>
        </ShoppingCartButton>
        <AboutButton className="about-button">
        <AboutLink className="about-link">About</AboutLink>
        </AboutButton>
      </Header>
        <ProductList products={products} />
      <Footer />
    </>
  )
}

