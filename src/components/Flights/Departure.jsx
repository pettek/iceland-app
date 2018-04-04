import React, { Component } from 'react';
import './Departure.css';

export default class Departure extends Component {
  render () {
    const data = this.props.data;

    return <div className="flight">
      <p><strong>{data.airline}</strong> ({data.flightNumber})
        to <strong>{data.to}</strong></p>
      <p>Planned
        departure: {data.date} {data.plannedArrival} ({data.realArrival})</p>
    </div>;
  }
}