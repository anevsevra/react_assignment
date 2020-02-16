import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import ModalTemplate from './modalTemplate';

const ModalSpinner = props => {
  const { isLoading } = props;

  return (
    <Modal
      show={isLoading}
      backdrop='static'
      dialogAs={ModalTemplate}
      className='d-flex justify-content-center align-items-center'
    />
  );
};

ModalSpinner.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default ModalSpinner;
