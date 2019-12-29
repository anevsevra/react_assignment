import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import IconSelector from '../shared/iconSelector';

class CartForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <>
        <div className="p-2 d-flex justify-content-center">
          <h4>Add product to your cart list</h4>
        </div>
        <Form>
          <Form.Group controlId="cartForm.productName" >
            <Form.Control type="text" placeholder="Product name" />
          </Form.Group>
          <Form.Group controlId="cartForm.productPrice">
            <Form.Control type="number" placeholder="Product price" />
          </Form.Group>
          <IconSelector />
          <Form.Row className="justify-content-center">
            <Button disabled type="submit">
              Add to list
            </Button>
          </Form.Row>
        </Form>
      </>
    );
  }
}

export default CartForm;
