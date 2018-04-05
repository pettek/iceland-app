import React                                      from 'react';
import { GoogleMap, withGoogleMap, withScriptjs } from 'react-google-maps';
import { compose, withProps }                     from 'recompose';
import { MarkersList }                            from './MarkersList';

export const Map = compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{height: `100%`}}/>,
    containerElement: <div style={{height: `400px`}}/>,
    mapElement: <div style={{height: `100%`}}/>,
  }),
  withScriptjs,
  withGoogleMap,
)((props) =>
  <GoogleMap
    defaultZoom={11}
    defaultCenter={{lat: 64.1, lng: -21.9}}>

    <MarkersList buses={props.buses} />
  </GoogleMap>
);