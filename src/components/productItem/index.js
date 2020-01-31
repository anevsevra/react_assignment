import { connect } from 'react-redux';
import { updateCartItem, deleteItemFromCart } from '../../redux/actions/cartActions';
import ProductItem from './page';

const mapDispatchToProps = (dispatch, ownProps) => (
  {
    updateCartItem: item => dispatch(updateCartItem({ id: ownProps.id, ...item })),
    deleteItemFromCart: () => dispatch(deleteItemFromCart(ownProps.id)),
  }
);

export default connect(null, mapDispatchToProps)(ProductItem);
