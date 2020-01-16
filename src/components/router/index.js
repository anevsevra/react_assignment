import React from 'react';
import { Route } from 'react-router-dom';
import ProductList from '../productList';

export default () => (
  <>
    <Route exact path='/' render={() => <ProductList />} />
    <Route exact path='/product/:id' render={() => ''} />
  </>
);
