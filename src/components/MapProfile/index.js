import React from 'react';
import {
  GoogleMap,
  Marker,
} from '@react-google-maps/api';



import '@reach/combobox/styles.css';

// a voir avce Lucas pour cette const
const libraries = ['places'];

const MapProfile = ({ latProp, lngProp }) => {
  const center = {lat: latProp, lng: lngProp}

  const mapContainerStyle = {
    height: '22vh',
    width: '22vw',
  };
  const options = {
    disableDefaultUI: true,
    zoomControl: true,
  };

  

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  
  return (
    <div className="mapProfile">
      
      <GoogleMap
        id='map'
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
        options={options}
        onLoad={onMapLoad}
      >

    <Marker
      position={{ lat: latProp, lng: lngProp }}
    />
        
      </GoogleMap>
    </div>
  );
};


  
  



export default MapProfile;
