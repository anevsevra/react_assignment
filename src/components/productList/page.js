import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProductItem from '../productItem';
import totalPriceSelector from '../../selectors/cartItemsSelector';

class ProductList extends React.Component {
  render() {
    const { items } = this.props;

    return (
      <>
        <Container fluid>
          {
            items.map(item => (
              <Row key={item.id} className='mb-1 bg-info'>
                <Col className='p-0'>
                  <ProductItem {...item} />
                </Col>
              </Row>
            ))
          }
          <Row>
            Total: {totalPriceSelector({ items })} $
          </Row>
        </Container>
      </>
    );
  }
}

ProductList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
      icon: PropTypes.string.isRequired,
    }),
  ),
};

ProductList.defaultProps = {
  items: [],
};

export default ProductList;
