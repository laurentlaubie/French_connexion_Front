import React from 'react';
import {
  GoogleMap,
  useLoadScript,
  Marker,
} from '@react-google-maps/api';



import '@reach/combobox/styles.css';

// a voir avce Lucas pour cette const
const libraries = ['places'];

const MapProfile = ({ latProp, lngProp }) => {
  const center = {lat: latProp, lng: lngProp}
  console.log(center);
  const mapContainerStyle = {
    height: '22vh',
    width: '22vw',
  };
  const options = {
    disableDefaultUI: true,
    zoomControl: true,
  };

  // const { isLoaded, loadError } = useLoadScript({
  //   googleMapsApiKey: 'AIzaSyBwtmT6Y23Qa2w0kN9YnenHqTfjgadDEgc',
  //   libraries,
  // });

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  }, []);

  // if (loadError) return 'Erreur';
  // if (!isLoaded) return 'Chargement...';

  return (
    <div className="mapProfile">
      
      <GoogleMap
        id='map'
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
        options={options}
        onClick={(event) => {
          console.log(event);
        }}
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
