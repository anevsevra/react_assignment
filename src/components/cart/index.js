import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CartForm from '../cartForm';
import ProductList from '../productList';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
    };
  }

  render() {
    return(
      <Container fluid>
        <Row>
          <Col md>
            <CartForm />
          </Col>
          <Col md>
            <ProductList />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Cart;
