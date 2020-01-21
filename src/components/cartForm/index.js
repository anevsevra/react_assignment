import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import IconSelector from '../shared/iconSelector';
import InputCounter from '../shared/inputCounter';

class CartForm extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = props.onSubmit;
    this.state = {
      formData: {
        cartFormProductName: '',
        cartFormProductPrice: '',
        cartFormProductQuantity: 1,
        cartFormProductIcon: 'cart',
      },
      isValid: false,
    };
    this.formRef = React.createRef();
  }

  componentDidUpdate() {
    const isValid = this.formRef.current.checkValidity();

    if (isValid ^ this.state.isValid) {
      this.setState({ isValid });
    }
  }

  handleInputChange = event => {
    const { id, value } = event.target;
    this.__updateFormData(id, value);
  }

  handleCounterClick = (id, op) => {
    let newVal = Number.parseInt(this.state.formData[id]);
    if (newVal !== 0 && !newVal) return;

    if (op === '-' && newVal > 1) {
      newVal -= 1;
    } else if (op === '+') {
      newVal += 1;
    }

    this.__updateFormData(id, newVal);
  }

  handleIconSelectorChange = (id, icon) => {
    this.__updateFormData(id, icon);
  }

  handleSubmit = event => {
    event.stopPropagation();
    event.preventDefault();
    const {
      formData: {
        cartFormProductName: name,
        cartFormProductPrice: price,
        cartFormProductQuantity: quantity,
        cartFormProductIcon: icon,
      }
    } = this.state;

    this.onSubmit({ name, price, quantity, icon });
  }

  __updateFormData(id, value) {
    const formData = Object.assign({}, this.state.formData, { [id]: value });

    this.setState({ formData });
  }

  render() {
    return(
      <>
        <div className='p-2 d-flex justify-content-center'>
          <h4>Add product to your cart list</h4>
        </div>
        <Form
          noValidate
          onSubmit={this.handleSubmit}
          ref={this.formRef}
        >
          <Form.Group controlId='cartFormProductName'>
            <Form.Control
              required
              type='text'
              placeholder='Product name'
              onChange={this.handleInputChange}
              value={this.state.formData.cartFormProductName}
            />
          </Form.Group>
          <Form.Group controlId='cartFormProductPrice'>
            <Form.Control
              type='number'
              required
              min={0}
              placeholder='Product price'
              onChange={this.handleInputChange}
              value={this.state.formData.cartFormProductPrice}
            />
          </Form.Group>
          <InputCounter
            id='cartFormProductQuantity'
            class='mb-1'
            min={1}
            required
            onChange={this.handleInputChange}
            onClick={this.handleCounterClick}
            value={this.state.formData.cartFormProductQuantity}
          />
          <IconSelector
            id='cartFormProductIcon'
            onChange={this.handleIconSelectorChange}
            value={this.state.formData.cartFormProductIcon}
          />
          <Form.Row className='justify-content-center'>
            <Button disabled={!this.state.isValid} type='submit'>
              Add to list
            </Button>
          </Form.Row>
        </Form>
      </>
    );
  }
}

export default CartForm;
