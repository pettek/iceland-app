import React from 'react';
import './Departure.css';

export const Departure = (props) => {
  const data = props.data;

  return <div className="flight">
    <p><strong>{data.airline}</strong> ({data.flightNumber})
      to <strong>{data.to}</strong></p>
    <p>Planned
      departure: {data.date} {data.plannedArrival} ({data.realArrival})</p>
  </div>;
};