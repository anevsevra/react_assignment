import ACTIONS from '../../../constants/actions';
import { getIndexById } from '../../../utils/get_cart_item';

function cart(state = {}, action) {
  let items;
  let index;

  switch (action.type) {
    case ACTIONS.ADD_ITEM_TO_CART:
      return {
        ...state,
        ...{
          items: [
            ...state.itmes,
            ...action.item,
          ],
          nextId: state.nextId + 1,
        },
      };
    case ACTIONS.UPDATE_CART_ITEM:
      items = [...state.items];
      index = getIndexById(action.item.id, items);
      items[index] = action.item;

      return {
        ...state,
        ...{
          items,
        },
      };
    case ACTIONS.DELETE_ITEM_FROM_CART:
      items = [...state.items];
      index = getIndexById(action.id, items);
      items.splice(index, 1);

      return {
        ...state,
        ...{
          items,
        },
      };
    default:
      return state;
  }
}

export default cart;
