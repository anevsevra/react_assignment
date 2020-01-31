import { connect } from 'react-redux';
import ProductItemPage from './page';
import { getCartItemById } from '../../utils/get_cart_item';

const mapStateToProps = (state, ownProps) => {
  const id = Number.parseInt(ownProps.id);
  const items = [...state.cart.items];
  const item = getCartItemById(id, items);

  return { item };
};

export default connect(mapStateToProps)(ProductItemPage);
