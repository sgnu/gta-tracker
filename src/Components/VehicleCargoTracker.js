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
];

const topRangeCars = [
  "811",
  "ETR1",
  "FMJ",
  "Mamba",
  "Osiris",
  "Reaper",
  "Roosevelt Valor",
  "Stirling GT",
  "T20",
  "Tyrus",
  "X80 Proto",
  "Z-Type"
];

const allFalse = [false, false, false, false, false, false, false, false, false, false, false, false];

class VehicleCargoTracker extends React.Component {
  constructor(props) {
    super(props);

    let standardStorage = localStorage.getItem("GTAstandardCars");
    let midStorage = localStorage.getItem("GTAmidCars");
    let topStorage = localStorage.getItem("GTAtopCars");

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

    if (topStorage !== null) {
      topStorage = JSON.parse(topStorage);
    } else {
      topStorage = allFalse;
      localStorage.setItem("GTAtopCars", JSON.stringify(topStorage));
    }

    this.state = {
      standardRangeCars: standardStorage,
      midRangeCars: midStorage,
      topRangeCars: topStorage
    };
  }

  render() {
    const standardVehicles = standardRangeCars.map((vehicle, index) => {
      return <Vehicle key = { index } id = { index } enabled = { this.state.standardRangeCars[index] } type = { 0 } vehicleName = { vehicle } />
    });
    const midVehicles = midRangeCars.map((vehicle, index) => {
      return <Vehicle key = { index } id = { index } enabled = { this.state.midRangeCars[index] } type = { 1 } vehicleName = { vehicle } />
    }); 
    const topVehicles = topRangeCars.map((vehicle, index) => {
      return <Vehicle key = { index } id = { index } enabled = {this.state.topRangeCars[index] } type = { 2 } vehicleName = { vehicle } />
    });

    return (
      <div className="VehicleCargoTracker">
        <h1>Vehicle Cargo</h1>
        <h2>Standard Range</h2>
        { standardVehicles }

        <h2>Mid Range</h2>
        { midVehicles }

        <h2>Top Range</h2>
        { topVehicles }
      </div>
    );
  }
}

export default VehicleCargoTracker;
