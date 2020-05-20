import React from 'react';

class Vehicle extends React.Component {

  render() {
    return (
      <div className="Vehicle">
        <h2>{ this.props.vehicleName }</h2>
      </div>
    )
  }
}

export default Vehicle;
