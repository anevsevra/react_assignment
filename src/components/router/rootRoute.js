import React from 'react';
import { Route } from 'react-router';
import ProductList from '../productList';

export default props => (
  <Route exact path='/' render={routeProps => <ProductList {...routeProps} {...props} />} />
);
