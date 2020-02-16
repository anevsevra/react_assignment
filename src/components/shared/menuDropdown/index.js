import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const MenuDropdown = props => (
  <div className='menu-dropdown mt-1 mb-1'>
    {props.children}
  </div>
);

MenuDropdown.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MenuDropdown;