import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import './mapResults.scss';
//import franceMap from 'src/assets/pictures/franceMap.gif';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const MapResults = () => (
  <div className="mapResults">
    <div style={{ height: '60vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBwtmT6Y23Qa2w0kN9YnenHqTfjgadDEgc' }}
        defaultCenter={{ lat: 48.830360, lng: 1.996623 }}
        defaultZoom={15}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  </div>
);

export default MapResults;
