import React from 'react';

class Vehicle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      enabled: this.props.enabled
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState(state => ({ enabled: !this.state.enabled }));
    this.setState(state => ({ color: this.state.enabled ? '#000000' : '#00000080' }));
  }

  render() {
    return (
      <div className="Vehicle" onClick={this.handleClick}>
        <h2 style={{ color: this.state.color }}>{ this.props.vehicleName }</h2>
      </div>
    )
  }
}

export default Vehicle;
