import React, { Component } from 'react';
import './Concert.css';
import dateFormat           from 'dateformat';

export default class Concert extends Component {
  render () {
    return (
      <div className="card concert-card">
        <div className="row">
          <div className="col-md-4 col-sm-5 col-5">
            <img className="img-fluid"
                 src={this.props.details.imageSource}
                 alt={this.props.details.eventDateName}/>
          </div>
          <div className="col-md-8 col-sm-5 col-7">
            <h3>{this.props.details.eventDateName}</h3>
            <p className="text-muted details">
              <i className="fa fa-clock-o" aria-hidden="true"/>&nbsp;
              {dateFormat(new Date(this.props.details.dateOfShow),
                'mmmm dS, H:MM')}&nbsp; &nbsp;
              <i className="fa fa-location-arrow" aria-hidden="true"/>&nbsp;
              {this.props.details.eventHallName}
            </p>
          </div>
        </div>
      </div>
    );
  }
}