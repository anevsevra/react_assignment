import { connect } from 'react-redux';
import ProductList from './page';

const mapStateToProps = state => {
  const { cart: { items } } = state;

  return { items };
};

export default connect(mapStateToProps)(ProductList);
