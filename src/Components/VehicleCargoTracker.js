import React from 'react';
import './VehicleCargoTracker.css'
import Vehicle from './Vehicle'

const standardRangeCars = [
  "Alpha",
  "Banshee 900R",
  "Bestia GTS",
  "Feltzer",
  "Jester",
  "Massacro",
  "Nightshade",
  "Sabre Turbo Custom",
  "Tampa",
  "Turismo R"
]

const allFalse = [false, false, false, false, false, false, false, false, false, false, false, false];

class VehicleCargoTracker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      standardRangeCars: allFalse
    };
  }

  render() {
    const standardVehicles = standardRangeCars.map((vehicle, index) => {
      return <Vehicle key = { index } id={ index } enabled = { this.state.standardRangeCars[index] } vehicleName = { vehicle } />
    });

    return (
      <div className="VehicleCargoTracker">
        <h1>Standard Range</h1>
        { standardVehicles }

      </div>
    );
  }
}

export default VehicleCargoTracker;
