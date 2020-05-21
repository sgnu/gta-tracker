import React from 'react';

const vehicleTypes = [
  "GTAstandardCars",
  "GTAmidCars"
];

class Vehicle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      enabled: this.props.enabled
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const newState = !this.state.enabled;
    this.setState(state => ({ enabled: newState }));
    
    const storageItem = JSON.parse(localStorage.getItem(vehicleTypes[this.props.type]));
    storageItem[this.props.id] = newState;
    localStorage.setItem(vehicleTypes[this.props.type], JSON.stringify(storageItem));
  }

  render() {
    return (
      <div className="Vehicle" onClick={this.handleClick}>
        <p style={{ color: this.state.enabled ? '#000000' : '#00000080' }}>{ this.props.vehicleName }</p>
      </div>
    )
  }
}

export default Vehicle;
