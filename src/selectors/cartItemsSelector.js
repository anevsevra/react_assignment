import { createSelector } from 'reselect';

const cartItemsSelector = state => state.items;

const totalPriceSelector = createSelector(
  cartItemsSelector,
  items => items.reduce((acc, item) => acc + (item.price * item.quantity), 0),
);

export default totalPriceSelector;
