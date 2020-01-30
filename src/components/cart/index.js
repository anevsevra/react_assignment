import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CartForm from '../cartForm';
import ProductList from '../productList';
import ProductPage from '../productItemPage/page';

class Cart extends React.Component {
  render() {
    const { match: { params } } = this.props;

    return (
      <Container fluid>
        <Row>
          <Col md>
            <CartForm />
          </Col>
          <Col md>
            <div className="p-2 d-flex justify-content-center">
              <h4>Product list</h4>
            </div>
            {params.id
              ? <ProductPage id={params.id} />
              : <ProductList />}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Cart;
