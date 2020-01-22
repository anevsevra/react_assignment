import React from 'react';
import { Link } from 'react-router-dom';
import InputCounter from '../shared/inputCounter';
import ICONS_SRC from '../../constants/productIcons';
import './style.css';

class ProductItem extends React.Component {
  constructor(props) {
    super(props);
    this.onItemQuantityCounterChange = props.onItemQuantityCounterChange;
    this.onItemQuantityCounterClick = props.onItemQuantityCounterClick;
    this.onDelete = props.onDelete;
    this.id = props.id;
  }

  handleCounterChange = event => {
    const { value } = event.target;

    if (value < 1) return;

    this.onItemQuantityCounterChange(this.id, Number.parseInt(value));
  }

  handleCounterClick = (_id, op) => {
    let increment = 0;

    if (op === '-') {
      increment -= 1;
    } else if (op === '+') {
      increment += 1;
    }

    this.onItemQuantityCounterClick(this.id, increment);
  }

  handleDeleteClick = () => {
    this.onDelete(this.id);
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

export default ProductItem;
