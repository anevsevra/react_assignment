import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const CounterButton = props => (
  <div className='counter-button' onClick={props.onClick}>
    {props.children}
  </div>
);

CounterButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default CounterButton;
