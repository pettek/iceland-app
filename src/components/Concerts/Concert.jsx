import React      from 'react';
import dateFormat from 'dateformat';
import './Concert.css';

const Concert = props => (
  <div className="card concert-card">
    <div className="row">
      <div className="col-md-4 col-sm-5 col-5">
        <img
          className="img-fluid"
          src={props.details.imageSource}
          alt={props.details.eventDateName}
        />
      </div>
      <div className="col-md-8 col-sm-5 col-7">
        <h3>{props.details.eventDateName}</h3>
        <p className="text-muted details">
          <i className="fa fa-clock-o" aria-hidden="true" />&nbsp;
          {dateFormat(
            new Date(props.details.dateOfShow),
            'mmmm dS, H:MM',
          )}&nbsp; &nbsp;
          <i className="fa fa-location-arrow" aria-hidden="true" />&nbsp;
          {props.details.eventHallName}
        </p>
      </div>
    </div>
  </div>
);

export default Concert;
