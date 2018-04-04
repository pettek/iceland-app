import React, { Component } from 'react';
import { connect }          from 'react-redux';
import Departure            from './Departure';

const mapStateToProps = state => ({
  departures: state.flights.departures,
});

@connect(mapStateToProps)
export default class DeparturesList extends Component {
  render () {
    const departures = this.props.departures.map((dep, ind) => (
      <Departure key={ind} data={dep}/>
    ));
    return <div>
      {departures}
    </div>;
  }
}