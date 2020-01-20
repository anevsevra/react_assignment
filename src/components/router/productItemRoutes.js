import React from 'react';
import { Route } from 'react-router';
import ProductPage from '../productItem/page';

export default props => (
  <Route exact path='/product/:id' render={
    routerProps => <ProductPage {...routerProps} {...props} />
  } />
);
