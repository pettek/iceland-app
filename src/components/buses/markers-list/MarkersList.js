import React, { Component } from 'react';
import { Marker }           from 'react-google-maps';
import { connect }          from 'react-redux';

const mapStateToProps = state => ({
  buses: state.buses,
});

@connect(mapStateToProps)
export default class MarkersList extends Component {
  render () {
    return this.props.buses.map((bus, ind) => (
      <Marker position={{lat: bus.lat, lng: bus.lon}}
              label={bus.route}
              key={ind}/>
    ));
  }
}