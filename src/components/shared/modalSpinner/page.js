import React from 'react';
import Modal from 'react-bootstrap/Modal';
import ModalTemplate from './modalTemplate';

export default props => {
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
