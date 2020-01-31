import ACTIONS from '../../../constants/actions';
import { getIndexById } from '../../../utils/get_cart_item';

const initialState = {
  items: [],
  nextId: 0,
};

function cart(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.ADD_ITEM_TO_CART: {
      const item = {
        id: state.nextId,
        ...action.item,
      };
      const items = [...state.items, item];

      return {
        ...state,
        items,
        nextId: state.nextId + 1,
      };
    }
    case ACTIONS.UPDATE_CART_ITEM: {
      const items = [...state.items];
      const index = getIndexById(action.item.id, items);

      items[index] = { ...items[index], ...action.item };

      return {
        ...state,
        items,
      };
    }
    case ACTIONS.DELETE_ITEM_FROM_CART: {
      const items = [...state.items];
      const index = getIndexById(action.id, items);

      items.splice(index, 1);

      return {
        ...state,
        items,
      };
    }
    default:
      return state;
  }
}

export default cart;
