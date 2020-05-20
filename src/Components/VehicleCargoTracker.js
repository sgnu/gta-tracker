import React from 'react';
import './VehicleCargoTracker.css'

const standardRangeCars = [
  "Alpha",
  "Banshee 900R"
]

class VehicleCargoTracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      standardRange: '00'
    };
  }

  render() {
    return (
      <div className="VehicleCargoTracker">
        <h1>Standard Range</h1>
        <h2>{ standardRangeCars[0] }</h2>
      </div>
    );
  }
}

export default VehicleCargoTracker;
