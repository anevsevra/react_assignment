import React from "react";
import CounterButton from "../counterButton";
import "./style.css";

class InputCounter extends React.Component {
  render() {
    const { class: injectedCssClasses, id: htmlId } = this.props;
    let componentCssClasses = 'd-flex justify-content-center align-items-center';
    
    if (injectedCssClasses) {
      componentCssClasses = `${componentCssClasses} ${injectedCssClasses}`
    }
    return(
      <div className={componentCssClasses}>
        <CounterButton onClick={() => console.log('clicked -')}>
          -
        </CounterButton>
        <input type="text" id={htmlId} className="input-counter-field" defaultValue="0" />
        <CounterButton onClick={() => console.log('clicked +')}>
          +
        </CounterButton>
      </div>
    );
  }
}

export default InputCounter;
