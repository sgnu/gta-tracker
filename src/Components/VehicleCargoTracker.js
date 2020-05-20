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

class VehicleCargoTracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      standardRange: [false, false, false, false, false, false, false, false, false, false]
    };
  }

  render() {
    const standardVehicles = standardRangeCars.map((vehicle) => {
      return <Vehicle key = { vehicle } vehicleName = { vehicle } />
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
