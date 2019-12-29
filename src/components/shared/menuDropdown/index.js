import React from "react";
import "./style.css";

export default props => (
  <div className="menu-dropdown mt-1 mb-1 d-none">
    {props.children}
  </div>
);
