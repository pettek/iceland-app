import React     from 'react';
import PropTypes from 'prop-types';
import './Departure.css';

const Departure = (props) => {
  const { data } = props;

  return (
    <div className="flight">
      <p><strong>{data.airline}</strong> ({data.flightNumber})
        to <strong>{data.to}</strong>
      </p>
      <p>Planned
        departure: {data.date} {data.plannedArrival} ({data.realArrival})
      </p>
    </div>);
};

Departure.propTypes = {
  data: PropTypes.shape({
    airline: PropTypes.string.isRequired,
    flightNumber: PropTypes.string.isRequired,
    plannedArrival: PropTypes.string.isRequired,
    realArrival: PropTypes.string.isRequired,
  }).isRequired,
};

export default Departure;
