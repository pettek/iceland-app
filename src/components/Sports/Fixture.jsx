import React     from 'react';
import PropTypes from 'prop-types';
import './Fixture.css';

const Fixture = (props) => {
  const date = props.details.date || props.details.Date || '';
  const time = props.details.time || props.details.Time || '';
  const location = props.details.location || props.details.Venue ||
    '';
  let teamsMerge;
  if (props.details.homeTeam && props.details.awayTeam) {
    teamsMerge = `${props.details.homeTeam} - ${
      props.details.awayTeam}`;
  }
  const teams = teamsMerge || props.details.teams ||
    props.details.Teams;

  return (
    <div className="fixture">
      <p>{teams}</p>
      <p>Date: {date} Time: {time}</p>
      <p>Place: {location}</p>
    </div>);
};

Fixture.propTypes = {
  details: PropTypes.shape({
    date: PropTypes.string,
    Date: PropTypes.string,
    time: PropTypes.string,
    Time: PropTypes.string,
    location: PropTypes.string,
    Venue: PropTypes.string,
    homeTeam: PropTypes.string,
    awayTeam: PropTypes.string,
    Teams: PropTypes.string,
    teams: PropTypes.string,
  }),
};

Fixture.defaultProps = {
  details: {
    date: null,
    Date: null,
    time: null,
    Time: null,
    location: null,
    Venue: null,
    homeTeam: null,
    awayTeam: null,
    Teams: null,
    teams: null,
  },
};

export default Fixture;
