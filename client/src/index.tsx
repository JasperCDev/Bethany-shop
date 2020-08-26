import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/app';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { ProductPage } from './components/productPage/productPage';

ReactDOM.render(
  <Router>
    <Route path="/" component={App} exact />
    <Route path="/listing/:id" component={ProductPage}>
    </Route>
  </Router>,
  document.getElementById('root')
);
