import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CartForm from '../cartForm';
import ProductList from '../productList';
import ProductPage from '../productItem/page';
import { getCartItemById, getIndexById } from '../../utils/get_cart_item';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: {
        items: [],
        nextId: 0,
      },
    };
  }

  addItemToCart = formData => {
    const { cart: { nextId } } = this.state;
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

  deleteItemFromCart = id => {
    const items = [...this.state.cart.items];
    const index = getIndexById(id, items);

    items.splice(index, 1);
    this.__updateItemsState(items);
  }

  handleItemQuantityCounterChange = (id, value) => {
    const items = [...this.state.cart.items];
    const item = getCartItemById(id, items);

    item.quantity = value;
    this.__updateItemsState(items);
  }

  handleItemQuantityCounterClick = (id, increment) => {
    const items = [...this.state.cart.items];
    const item = { ...getCartItemById(id, items) };
    const newQuantity = item.quantity + increment;

    if (newQuantity < 1) return;

    item.quantity = newQuantity;

    this.__updateItemsState(items);
  }

  __updateItemsState(items) {
    const cart = Object.assign({}, this.state.cart, { items });

    this.setState({ cart });
  }

  render() {
    const { match: { params } } = this.props;

    return (
      <Container fluid>
        <Row>
          <Col md>
            <CartForm onSubmit={this.addItemToCart} />
          </Col>
          <Col md>
            <div className="p-2 d-flex justify-content-center">
              <h4>Product list</h4>
            </div>
            {params.id
              ? <ProductPage item={getCartItemById(Number.parseInt(params.id), this.state.cart.items)} />
              : (
                <ProductList
                  state={this.state}
                  onItemQuantityCounterChange={this.handleItemQuantityCounterChange}
                  onItemQuantityCounterClick={this.handleItemQuantityCounterClick}
                  onDelete={this.deleteItemFromCart}
                />
              )}
          </Col>
        </Row>
      </Container>
    );
  }
}

Cart.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default Cart;
