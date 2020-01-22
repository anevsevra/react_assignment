import React from 'react';
import CounterButton from '../counterButton';
import './style.css';

class InputCounter extends React.Component {
  render() {
    const {
      class: injectedCssClasses,
      id: htmlId = 'defaultCounterId',
      required,
      min = null,
      max = null,
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

export default InputCounter;
