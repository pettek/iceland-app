import React, { Component }  from 'react';
import { fetchBusesFromApi } from '../../actions';
import { connect }           from 'react-redux';
import { MapComponent }      from './map-component';

const mapDispatchToProps = dispatch => {
  return {
    fetchBusesFromApi: () => dispatch(fetchBusesFromApi()),
  };
};

@connect(null, mapDispatchToProps)
export default class Buses extends Component {

  componentWillMount () {
    this.intervalId = setInterval(() => this.props.fetchBusesFromApi(), 5000);
    this.props.fetchBusesFromApi();
  }

  componentWillUnmount () {
    clearInterval(this.intervalId);
  }

  render () {
    return <div>
      <MapComponent
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{height: `100%`}}/>}
        containerElement={<div style={{height: `70vh`, width: `100%`}}/>}
        mapElement={<div style={{height: `100%`}}/>}
      />
    </div>;
  }
}





