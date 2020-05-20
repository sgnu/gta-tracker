import React from 'react';
import './App.css';
import VehicleCargoTracker from './Components/VehicleCargoTracker';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <h1>Hello, World!</h1>
        <div className="vehicleCargo">
          <VehicleCargoTracker vehicleName="T20" />
        </div>
      </div>
    );
  }
}

export default App;
