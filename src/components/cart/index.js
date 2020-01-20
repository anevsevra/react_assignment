import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BrowserRouter } from 'react-router-dom';
import CartForm from '../cartForm';
import ProductItemsRoutes from '../router/productItemsRoutes';
import getCartItemById from '../../utils/get_cart_item';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: {
        items: [],
        nextId: 0,
      }
    };
  }

  addItemToCart = formData => {
    const nextId = this.state.cart.nextId;
    const newItem = {
      id: nextId,
      name: formData.name,
      quantity: formData.quantity,
      price: formData.price,
      icon: formData.icon,
    };
    const items = [...this.state.cart.items, newItem];
    const cart = { items, nextId: nextId + 1 };

    this.setState({ cart });
  }

  changeItemQuantity = (id, op) => {
    const items = [...this.state.cart.items];
    const item = getCartItemById(id, this.state.cart.items);
    let newVal = item.quantity;

    if (newVal !== 0 && !newVal) return;

    if (op === '-' && newVal > 1) {
      newVal -= 1;
    } else if (op === '+') {
      newVal += 1;
    } else {
      return;
    }

    item.quantity = newVal;
    const cart = Object.assign({}, this.state.cart, { items });
    this.setState({ cart });
  }

  render() {
    return(
      <Container fluid>
        <Row>
          <Col md>
            <CartForm onSubmit={this.addItemToCart} />
          </Col>
          <Col md>
            <div className="p-2 d-flex justify-content-center">
              <h4>Product list</h4>
            </div>
            <BrowserRouter>
              <ProductItemsRoutes state={this.state} onQuantityChange={this.changeItemQuantity} />
            </BrowserRouter>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Cart;
