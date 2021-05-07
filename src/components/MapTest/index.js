import React from 'react';
import {
  GoogleMap, useLoadScript, Marker, InfoWindow,
} from '@react-google-maps/api';
import { formatRelative } from 'date-fns';
import GoogleMapReact from 'google-map-react';

import './mapTest.scss';
import mapStyles from './mapStyles';

const REACT_APP_GOOGLE_API_KEY = 'AIzaSyBwtmT6Y23Qa2w0kN9YnenHqTfjgadDEgc';
const libraries = ['places'];
const mapContainerStyle = {
  width: '100vw',
  height: '100vh',
};
/*
  const center = {
    lat: 48.866667,
    lng: 2.333333,
  };
*/
const options = {
  // styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

const MapTest = ({ center, markers, handleSelected, markerSelected }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: REACT_APP_GOOGLE_API_KEY,
    libraries,
  });
  if (loadError) return 'Error loading maps';
  if (!isLoaded) return 'Loading Maps';

  return (
    <div className="mapTest">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={6}
        center={center}
        options={options}
        onClick={(event) => {
          console.log(event);
        }}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.lat}
            position={{ lat: marker.lat, lng: marker.lng }}
            onClick={() => {
              handleSelected(marker);
            }}
          />
        ))}
        {markerSelected ? (
          <InfoWindow
            position={{ lat: markerSelected.lat, lng: markerSelected.lng }}
            onCloseClick={() => {
              handleSelected(null);
            }}
          >
            <div>
              <h2>Coucou !</h2>
              <p>Merci d'avoir cliqué :p </p>
            </div>
          </InfoWindow>
        ) : null }
      </GoogleMap>
    </div>
  );
};
export default MapTest;
