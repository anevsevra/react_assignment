import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CartForm from '../cartForm';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
    };
  }

  render() {
    return(
      <Container fluid={true}>
        <Row>
          <Col md>
            <CartForm />
          </Col>
          <Col md>
            test2
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Cart;
