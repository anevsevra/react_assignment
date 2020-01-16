import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProductItem from '../productItem';
import totalPriceSelector from '../../selectors/cartItemsSelector';

class ProductList extends React.Component {
  render() {
    const STATE_STUB = {
      cart: {
        items: [
          {
            id: 1,
            name: 'Test name 1',
            quantity: 10,
            price: 3,
            icon: 'burger',
          },
          {
            id: 2,
            name: 'Test name 2',
            quantity: 7,
            price: 1,
            icon: 'frenchFries',
          }
        ],
      }
    }

    return(
      <>
        <div className="p-2 d-flex justify-content-center">
          <h4>Product list</h4>
        </div>
        <Container fluid={true}>
          {
            STATE_STUB.cart.items.map(item => (
              <Row key={item.id} className='mb-1 bg-info'>
                <Col>
                  <ProductItem {...item} />
                </Col>
              </Row>
            ))
          }
          <Row>
            Total: {totalPriceSelector(STATE_STUB)} $
          </Row>
        </Container>
      </>
    );
  }
}

export default ProductList;
