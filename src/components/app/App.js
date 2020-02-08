import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import './App.css';
import Cart from '../cart';
import NotFound from '../notFound';
import ModalSpinner from '../shared/modalSpinner';

function App() {
  return (
    <>
      <ModalSpinner />
      <BrowserRouter>
        <Switch>
          <Route exact path='/' render={routeProps => <Cart {...routeProps} />} />
          <Route exact path='/product/:id' render={routeProps => <Cart {...routeProps} />} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
