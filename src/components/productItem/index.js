import { connect } from 'react-redux';
import { updateCartItem, deleteItemFromCart } from '../../redux/actions/cartActions';
import ProductItem from './page';

const mapDispatchToProps = (dispatch, ownProps) => (
  {
    updateCartItem: (...args) => dispatch(updateCartItem(...args)),
    deleteItemFromCart: () => dispatch(deleteItemFromCart(ownProps.id)),
  }
);

export default connect(null, mapDispatchToProps)(ProductItem);
