import React from 'react';
import Image from 'react-bootstrap/Image';
import MenuDropdown from '../menuDropdown';
import ICONS_SRC from '../../../constants/productIcons';

class IconSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggled: false,
    };
  }

  handleTogglerClick = () => {
    this.setState({ isToggled: !this.state.isToggled });
  }

  handleMenuItemClick = item => {
    const { onChange, id } = this.props;

    this.handleTogglerClick();
    onChange(id, item);
  }

  render() {
    const { value: icon, id: htmlId } = this.props;

    return (
      <div className='d-flex flex-column align-items-center mb-1'>
        <div onClick={this.handleTogglerClick}>
          <Image src={ICONS_SRC[icon].small} roundedCircle className='bg-info' />
        </div>
        {this.state.isToggled
          && (
            <MenuDropdown>
              {Object.keys(ICONS_SRC).map(item => (
                (
                  <Image
                    src={ICONS_SRC[item].small}
                    key={item}
                    roundedCircle
                    className='ml-1 mr-1 menu-dropdown-item'
                    onClick={() => this.handleMenuItemClick(item)}
                  />
                )
              ))}
            </MenuDropdown>
          )}
        <input id={htmlId} type='hidden' value={icon} />
      </div>
    );
  }
}

export default IconSelector;
