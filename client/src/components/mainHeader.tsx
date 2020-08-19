import React from 'react';
import { Header, Title, Subtitle, ShoppingCartButton, ShoppingCartLink, ShoppingCartText, AboutLink, AboutButton } from './styles';
import { ShoppingCart } from '@material-ui/icons';


export const MainHeader: React.FC = () => {
  return (
    <Header>
      <div>
        <Title>Bethany's Shop</Title>
        <Subtitle>Womens Athletic Wear and Homemade Jewelery</Subtitle>
      </div>
      <ShoppingCartButton>
        <ShoppingCartLink>
          <ShoppingCartText>
            Cart
          </ShoppingCartText>
          <ShoppingCart fontSize="inherit" />
        </ShoppingCartLink>
      </ShoppingCartButton>
      <AboutButton>
        <AboutLink>About</AboutLink>
      </AboutButton>
    </Header>
  )
}

