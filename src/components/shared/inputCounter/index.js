import React from "react";
import CounterButton from "../counterButton";
import "./style.css";

class InputCounter extends React.Component {
  render() {
    return(
      <div className={`d-flex justify-content-center ${this.props.class}`}>
        <CounterButton onClick={() => console.log('clicked -')}>
          -
        </CounterButton>
        <input type="text" id={this.props.id} className="input-counter-field" defaultValue="0" />
        <CounterButton onClick={() => console.log('clicked +')}>
          +
        </CounterButton>
      </div>
    );
  }
}

export default InputCounter;
