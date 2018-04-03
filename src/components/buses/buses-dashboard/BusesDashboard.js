import React, { Component }  from 'react';
import { fetchBusesFromApi } from '../../../actions';
import { connect }           from 'react-redux';
import {
  GoogleMap,
  withGoogleMap,
  withScriptjs,
}                            from 'react-google-maps';
import { compose }           from 'recompose';
import MarkersList           from '../markers-list/MarkersList';

const mapDispatchToProps = dispatch => {
  return {
    fetchBusesFromApi: () => dispatch(fetchBusesFromApi()),
  };
};

const MapComponent = compose(
  withScriptjs,
  withGoogleMap,
)(() =>
  <GoogleMap
    defaultZoom={11}
    defaultCenter={{lat: 64.1, lng: -21.9}}
  >
    <MarkersList/>
  </GoogleMap>,
);

@connect(null, mapDispatchToProps)
export default class BusesDashboard extends Component {

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





