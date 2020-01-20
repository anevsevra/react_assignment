import React from 'react';
import { Route } from 'react-router';
import ProductList from '../productList';
import ProductPage from '../productItem/page';

export default props => (
  <>
    <Route exact path='/' render={() => <ProductList state={props.state} />} />
    <Route exact path='/product/:id' render={
      routerProps => <ProductPage {...routerProps} state={props.state} />
    } />
  </>
);
