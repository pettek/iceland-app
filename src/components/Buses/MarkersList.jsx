import React from 'react';
import { Marker } from 'react-google-maps';

const MarkersList = props => (
  props.buses.map(bus => (
    <Marker
      position={{ lat: bus.lat, lng: bus.lon }}
      label={bus.route}
      key={bus.route}
    />))
);

export default MarkersList;
