import React from 'react';
import './style.css';

export default props => (
  <div className='counter-button' onClick={props.onClick}>
    {props.children}
  </div>
);
