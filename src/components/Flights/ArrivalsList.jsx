import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { Arrival }          from './Arrival';

const mapStateToProps = state => ({
  arrivals: state.flights.arrivals,
});

@connect(mapStateToProps)
export default class ArrivalsList extends Component {
  render () {
    const arrivals = this.props.arrivals.map((dep, ind) => (
      <Arrival key={ind} data={dep}/>
    ));
    return <div>
      {arrivals}
    </div>;
  }
}