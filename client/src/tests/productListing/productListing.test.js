import React from 'react';
import ReactDOM from 'react-dom';
import ProductListing from '../../components/productListing';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(ProductListing, div);
});