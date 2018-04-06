import React, { Component } from 'react';
import { connect }          from 'react-redux';
import shortid              from 'shortid';
import PropTypes            from 'prop-types';
import Departure            from './Departure';

const mapStateToProps = state => ({
  departures: state.flights.departures,
});

@connect(mapStateToProps)
export default class DeparturesList extends Component {
  static propTypes = {
    departures: PropTypes.arrayOf({
      airline: PropTypes.string.isRequired,
      flightNumber: PropTypes.string.isRequired,
      plannedArrival: PropTypes.string.isRequired,
      realArrival: PropTypes.string.isRequired,
    }).isRequired,
  };

  render() {
    const departures = this.props.departures.map(dep => (
      <Departure key={shortid.generate()} data={dep} />
    ));
    return (
      <div>
        {departures}
      </div>);
  }
}
