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
];

const midRangeCars = [
  "Cheetah",
  "Coquette BlackFin",
  "Coquette Classic",
  "Entity XF",
  "Omnis",
  "Seven-70",
  "Sultan RS",
  "Tropos Rallye",
  "Verlierer",
  "Zentorno"
]

const allFalse = [false, false, false, false, false, false, false, false, false, false, false, false];

class VehicleCargoTracker extends React.Component {
  constructor(props) {
    super(props);

    let standardStorage = localStorage.getItem("GTAstandardCars");
    let midStorage = localStorage.getItem("GTAmidCars");

    if (standardStorage !== null) {
      standardStorage = JSON.parse(standardStorage);
    } else {
      standardStorage = allFalse;
      localStorage.setItem("GTAstandardCars", JSON.stringify(standardStorage));
    }

    if (midStorage !== null) {
      midStorage = JSON.parse(midStorage);
    } else {
      midStorage = allFalse;
      localStorage.setItem("GTAmidCars", JSON.stringify(midStorage));
    }

    this.state = {
      standardRangeCars: standardStorage,
      midRangeCars: midStorage
    };
  }

  render() {
    const standardVehicles = standardRangeCars.map((vehicle, index) => {
      return <Vehicle key = { index } id = { index } enabled = { this.state.standardRangeCars[index] } type = { 0 } vehicleName = { vehicle } />
    });
    const midVehicles = midRangeCars.map((vehicle, index) => {
      return <Vehicle key = { index } id = { index } enabled = { this.state.midRangeCars[index] } type = { 1 } vehicleName = { vehicle } />
    }); 

    return (
      <div className="VehicleCargoTracker">
        <h1>Vehicle Cargo</h1>
        <h2>Standard Range</h2>
        { standardVehicles }

        <h2>Mid Range</h2>
        { midVehicles }
      </div>
    );
  }
}

export default VehicleCargoTracker;
