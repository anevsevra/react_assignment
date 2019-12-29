import React from "react";

export default props => {
  const handleClick = e => {
    const dropdown = e.currentTarget.parentNode.querySelector(".menu-toggler + .menu-dropdown");

    dropdown.classList.toggle("d-none");
  };

  return(
    <div className="menu-toggler" onClick={handleClick}>
      {props.children}
    </div>
  );
};
