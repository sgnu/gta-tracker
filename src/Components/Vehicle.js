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
  }

  render() {
    return (
      <div className="Vehicle" onClick={this.handleClick}>
        <h2 style={{ color: this.state.enabled ? '#000000' : '#00000080' }}> { this.props.id }: { this.props.vehicleName }</h2>
      </div>
    )
  }
}

export default Vehicle;
