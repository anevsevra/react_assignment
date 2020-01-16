import React from 'react';
import InputCounter from '../shared/inputCounter';
import ICONS_SRC from '../../constants/productIcons';
import './style.css';

class ProductItem extends React.Component {
  render() {
    const {
      id,
      name,
      quantity,
      price,
      icon,
    } = this.props;

    return(
      <>
        <div className='product-item-header'>
          <h6 className='product-item-header-caption'>{name}</h6>
          <div className='product-item-header-icons'>
            
          </div>
        </div>
        <div className='product-item-main'>
          <div className='product-item-main-icon'>
            <img src={ICONS_SRC[icon]} alt='' />
          </div>
          <div className='product-item-main-counter'>
            <InputCounter value={quantity} />
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
