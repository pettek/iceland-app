import React     from 'react';
import PropTypes from 'prop-types';
import './Ride.css';


const Ride = (props) => {
  const {
    link, from, to, date, time,
  } = props.details;

  return (
    <div className="ride-card row">
      <div className="col-md-6">
        <strong>{from}</strong> <i
          className="fa fa-arrow-circle-o-right"
          aria-hidden="true"
        />&nbsp;
        <strong>{to}</strong> &nbsp;
      </div>
      <div className="col-md-1">
        <a href={link}><i
          className="fa fa-external-link"
          aria-hidden="true"
        />&nbsp;
        </a>
      </div>
      <div className="col-md-3">
        <i className="fa fa-calendar-o" aria-hidden="true" />&nbsp;{date} &nbsp;
      </div>
      <div className="col-md-2">
        <i className="fa fa-clock-o" aria-hidden="true" />&nbsp;{time}
      </div>
    </div>);
};

Ride.propTypes = {
  details: PropTypes.shape({
    link: PropTypes.string,
    from: PropTypes.string,
    to: PropTypes.string,
    date: PropTypes.string,
    time: PropTypes.string,
  }).isRequired,
};

export default Ride;
