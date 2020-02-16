import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import InputCounter from '../shared/inputCounter';
import ICONS_SRC from '../../constants/productIcons';
import './style.css';

class ProductItem extends React.Component {
  constructor(props) {
    super(props);
    this.updateCartItem = props.updateCartItem;
    this.deleteItemFromCart = props.deleteItemFromCart;
  }

  handleCounterChange = event => {
    const quantity = Number.parseInt(event.target.value) || 0;

    if (quantity < 1) return;

    this.updateCartItem({ quantity });
  }

  handleCounterClick = (_id, op) => {
    let { quantity } = this.props;

    if (op === '-') {
      quantity -= 1;
    } else if (op === '+') {
      quantity += 1;
    }
    if (quantity < 1) return;

    this.updateCartItem({ quantity });
  }

  handleDeleteClick = () => {
    this.deleteItemFromCart();
  }

  render() {
    const {
      id,
      name,
      quantity,
      price,
      icon,
    } = this.props;

    return (
      <>
        <div className='product-item-header'>
          <h6 className='product-item-header-caption'>{name}</h6>
          <div className='product-item-header-icons'>
            <Link to={`/product/${id}`}>
              <img src='/img/chain_icon_small.png' alt='' />
            </Link>
            <div className='d-inline-block' onClick={this.handleDeleteClick}>
              <img src='/img/trash_icon_small.png' alt='' />
            </div>
          </div>
        </div>
        <div className='product-item-main'>
          <div className='product-item-main-icon'>
            <img src={ICONS_SRC[icon].small} alt='' />
          </div>
          <div className='product-item-main-counter'>
            <InputCounter
              id={`itemQuantity${id}`}
              min={1}
              value={quantity}
              onClick={this.handleCounterClick}
              onChange={this.handleCounterChange}
            />
          </div>
        </div>
        <div className='d-flex justify-content-center'>
          Total: {price * quantity} $
        </div>
      </>
    );
  }
}

ProductItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  updateCartItem: PropTypes.func.isRequired,
  deleteItemFromCart: PropTypes.func.isRequired,
};

export default ProductItem;
