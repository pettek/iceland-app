import React, { Component }    from 'react';
import DeparturesList          from './DeparturesList';
import ArrivalsList            from './ArrivalsList';
import { connect }             from 'react-redux';
import { getArrivals, getDepartures } from '../../actions/index';

const mapDispatchToProps = dispatch => ({
  getArrivals: () => dispatch(getArrivals()),
  getDepartures: () => dispatch(getDepartures()),
});

@connect(null, mapDispatchToProps)
export default class Flights extends Component {
  componentDidMount() {
    this.props.getArrivals();
    this.props.getDepartures();
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <h1>Departures</h1>
          <DeparturesList />
        </div>
        <div className="col-md-6">
          <h1>Arrivals</h1>
          <ArrivalsList />
        </div>
      </div>);
  }
}
