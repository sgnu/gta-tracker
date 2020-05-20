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
    return (
      <div className="VehicleCargoTracker">
        <h1>Standard Range</h1>
        <Vehicle vehicleName={standardRangeCars[0]} enabled={ this.state.standardRange[0] } id={0} />
        <Vehicle vehicleName={standardRangeCars[1]} enabled={ this.state.standardRange[1] } id={1} />
        <Vehicle vehicleName={standardRangeCars[2]} enabled={ this.state.standardRange[2] } id={2} />
        <Vehicle vehicleName={standardRangeCars[3]} enabled={ this.state.standardRange[3] } id={3} />
        <Vehicle vehicleName={standardRangeCars[4]} enabled={ this.state.standardRange[4] } id={4} />
        <Vehicle vehicleName={standardRangeCars[5]} enabled={ this.state.standardRange[5] } id={5} />
        <Vehicle vehicleName={standardRangeCars[6]} enabled={ this.state.standardRange[6] } id={6} />
        <Vehicle vehicleName={standardRangeCars[7]} enabled={ this.state.standardRange[7] } id={7} />
        <Vehicle vehicleName={standardRangeCars[8]} enabled={ this.state.standardRange[8] } id={8} />
        <Vehicle vehicleName={standardRangeCars[9]} enabled={ this.state.standardRange[9] } id={9} />
      </div>
    );
  }
}

export default VehicleCargoTracker;
