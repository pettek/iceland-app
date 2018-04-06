import React, { Component } from 'react';
import { connect }          from 'react-redux';
import PropTypes            from 'prop-types';
import Arrival              from './Arrival';

const mapStateToProps = state => ({
  arrivals: state.flights.arrivals,
});

@connect(mapStateToProps)
export default class ArrivalsList extends Component {
  static propTypes = {
    arrivals: PropTypes.arrayOf({
      airline: PropTypes.string.isRequired,
      flightNumber: PropTypes.string.isRequired,
      plannedArrival: PropTypes.string.isRequired,
      realArrival: PropTypes.string.isRequired,
    }).isRequired,
  };

  render() {
    const arrivals = this.props.arrivals.map(dep => (
      <Arrival key={dep.flightNumber} data={dep} />
    ));
    return (
      <div>
        {arrivals}
      </div>);
  }
}
