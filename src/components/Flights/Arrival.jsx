import React     from 'react';
import PropTypes from 'prop-types';

const Arrival = (props) => {
  const { data } = props;

  return (
    <div className="flight">
      <p><strong>{data.airline}</strong> ({data.flightNumber})
        from <strong>{data.from}</strong>
      </p>
      <p>Planned
        arrival: {data.date} {data.plannedArrival} ({data.realArrival})
      </p>
    </div>);
};

Arrival.propTypes = {
  data: PropTypes.shape({
    airline: PropTypes.string.isRequired,
    flightNumber: PropTypes.string.isRequired,
    plannedArrival: PropTypes.string.isRequired,
    realArrival: PropTypes.string.isRequired,
  }).isRequired,
};

export default Arrival;
