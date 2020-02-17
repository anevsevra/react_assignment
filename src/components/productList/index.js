import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProductItem from '../productItem';
import totalPriceSelector from '../../selectors/cartItemsSelector';

class ProductList extends React.Component {
  render() {
    const {
      state: { cart },
      onItemQuantityCounterChange,
      onItemQuantityCounterClick,
      onDelete,
    } = this.props;

    return (
      <>
        <Container fluid>
          {
            cart.items.map(item => (
              <Row key={item.id} className='mb-1 bg-info'>
                <Col className='p-0'>
                  <ProductItem
                    {...item}
                    onItemQuantityCounterChange={onItemQuantityCounterChange}
                    onItemQuantityCounterClick={onItemQuantityCounterClick}
                    onDelete={onDelete}
                  />
                </Col>
              </Row>
            ))
          }
          <Row>
            Total: {totalPriceSelector(cart)} $
          </Row>
        </Container>
      </>
    );
  }
}

ProductList.propTypes = {
  state: PropTypes.shape({
    cart: PropTypes.shape({
      items: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
        icon: PropTypes.string.isRequired,
      })),
    }),
  }),
  onItemQuantityCounterChange: PropTypes.func.isRequired,
  onItemQuantityCounterClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

ProductList.defaultProps = {
  state: {
    cart: [],
  },
};

export default ProductList;
