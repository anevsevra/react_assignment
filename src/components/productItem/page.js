import React from 'react';
import { Link } from 'react-router-dom';
import getCartItemById from '../../utils/get_cart_item';
import ICONS_SRC from '../../constants/productIcons';

class ProductItemPage extends React.Component {
  constructor(props) {
    super(props);
    const id = Number.parseInt(props.match.params.id);
    this.item = getCartItemById(id, props.state.cart.items);
  }

  render() {
    if (!this.item) {
      return(
        <div className='text-center'>
          <h5>Item doesn't exist!</h5>
        </div>
      );
    }

    const {
      name,
      quantity,
      price,
      icon,
    } = this.item;

    return(
      <div className='d-flex flex-column align-items-center'>
        <div>
          <h5>{name}</h5>
        </div>
        <div>
          <img src={ICONS_SRC[icon].medium} alt='' />
        </div>
        <div>
          Count: {quantity}
        </div>
        <div>
          Price: {price} $
        </div>
        <div className='mb-1'>
          Total: {quantity * price} $
        </div>
        <Link to='/' className='btn btn-primary'>Back to list</Link>
      </div>
    );
  }
}

export default ProductItemPage;
