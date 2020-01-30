import { connect } from 'react-redux';
import { addItemToCart } from '../../redux/actions/cartActions';
import CartForm from './page';

const mapDispatchToProps = { onSubmit: addItemToCart };

export default connect(null, mapDispatchToProps)(CartForm);
