import React, { Component } from 'react';
import './Ride.css';

export default class Ride extends Component {
  render () {
    const {from, to, date, time} = this.props.details;
    return <div className="ride-card row">
      <div className="col-md-7">
        <strong>{from}</strong> <i className="fa fa-arrow-circle-o-right" aria-hidden="true"/>&nbsp;
        <strong>{to}</strong> &nbsp;
      </div>
      <div className="col-md-3">
        <i className="fa fa-calendar-o" aria-hidden="true"/>&nbsp;{date} &nbsp;
      </div>
      <div className="col-md-2">
        <i className="fa fa-clock-o" aria-hidden="true"/>&nbsp;{time}
      </div>
    </div>;
  }
}