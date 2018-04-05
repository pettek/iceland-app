import React from 'react';
import { Marker }           from 'react-google-maps';

export const MarkersList = (props) => (
    props.buses.map((bus, ind) => (
      <Marker position={{lat: bus.lat, lng: bus.lon}}
              label={bus.route}
              key={ind}/>)
    )
);
