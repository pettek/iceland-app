import React                                      from 'react';
import { GoogleMap, withGoogleMap, withScriptjs } from 'react-google-maps';
import { compose }                                from 'recompose';
import MarkersList                                from '../markers-list';

export const MapComponent = compose(
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