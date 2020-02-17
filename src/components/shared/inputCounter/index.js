import React from 'react';
import PropTypes from 'prop-types';
import CounterButton from '../counterButton';
import './style.css';

class InputCounter extends React.Component {
  render() {
    const {
      class: injectedCssClasses,
      id: htmlId,
      required,
      min,
      max,
      value,
      onChange,
      onClick,
    } = this.props;
    let componentCssClasses = 'd-flex justify-content-center align-items-center';

    if (injectedCssClasses) {
      componentCssClasses = `${componentCssClasses} ${injectedCssClasses}`;
    }

    return (
      <div className={componentCssClasses}>
        <CounterButton onClick={() => onClick(htmlId, '-')}>
          -
        </CounterButton>
        <input
          type='number'
          {
            ...{
              id: htmlId,
              required,
              min,
              max,
              value,
              onChange
            }
          }
          className='input-counter-field'
        />
        <CounterButton onClick={() => onClick(htmlId, '+')}>
          +
        </CounterButton>
      </div>
    );
  }
}

InputCounter.propTypes = {
  class: PropTypes.string,
  id: PropTypes.string,
  required: PropTypes.bool,
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
};

InputCounter.defaultProps = {
  class: '',
  id: 'defaultCounterId',
  required: false,
  min: undefined,
  max: undefined,
  value: 0,
  onChange: undefined,
  onClick: undefined,
};

export default InputCounter;
