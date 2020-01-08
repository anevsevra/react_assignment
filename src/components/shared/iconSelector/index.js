import React from "react";
import Image from "react-bootstrap/Image";
import MenuToggler from "../menuToggler";
import MenuDropdown from "../menuDropdown";
import ICONS_SRC from "../../../constants/productIcons";

class IconSelector extends React.Component {
  render() {
    return(
      <div className="d-flex flex-column align-items-center mb-1">
        <MenuToggler>
          <Image src={ICONS_SRC.cart} roundedCircle className="bg-info" />
        </MenuToggler>
        <MenuDropdown>
          {Object.keys(ICONS_SRC).map(item => (
            <Image src={ICONS_SRC[item]} key={item} roundedCircle className="ml-1 mr-1 menu-dropdown-item" />
          ))}
        </MenuDropdown>
      </div>
    );
  }
}

export default IconSelector;
