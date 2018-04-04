import React, {Component} from 'react';

export default class Arrival extends Component {
  render () {
    const data = this.props.data;

    return <div className="flight">
      <p><strong>{data.airline}</strong> ({data.flightNumber})
        from <strong>{data.from}</strong></p>
      <p>Planned
        arrival: {data.date} {data.plannedArrival} ({data.realArrival})</p>
    </div>;
  }
}