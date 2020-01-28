import ACTIONS from '../../constants/actions';

export const addItemToCart = item => (
  {
    type: ACTIONS.ADD_ITEM_TO_CART,
    item,
  }
);

export const deleteItemFromCart = id => (
  {
    type: ACTIONS.DELETE_ITEM_FROM_CART,
    id,
  }
);

export const updateCartItem = item => (
  {
    type: ACTIONS.UPDATE_CART_ITEM,
    item,
  }
);
