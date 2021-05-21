import React from 'react';
import {
  GoogleMap,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from '@reach/combobox';
import { formatRelative } from 'date-fns';

import '@reach/combobox/styles.css';
import mapStyles from './mapStyles';
import './mapResults.scss';

const libraries = ['places'];

const MapResults = ({
  center, markers, handleSelected, markerSelected, usersCities, listLoading, selectCity, setCenter, setAdress
}) => {
  const mapContainerStyle = {
    height: '95%',
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
    minHeight: '50vh',
    marginTop: '5%',
  };
  const options = {
    styles: mapStyles,
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
    <div className="mapResults">
      {!listLoading
      && (
      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        classname="mapResults__map"
        zoom={8}
        center={center}
        options={options}
        resetBoundsOnResize
        onClick={(event) => {
          console.log(event);
        }}
        onLoad={onMapLoad}
      >
        {
        usersCities[0].cities.map((city) => (
          <Marker
            key={`${city.latitude}-${city.longitude}`}
            position={{ lat: city.latitude, lng: city.longitude }}
            onClick={() => {
            // handleSelected(marker);
              selectCity(city.users, city.name);
              const latlng = { lat: city.latitude, lng: city.longitude };
              setCenter(latlng);
              setAdress('');
            }}
          />
        ))
        }

        {markerSelected ? (
          <InfoWindow
            position={{ lat: markerSelected.lat, lng: markerSelected.lng }}
            onCloseClick={() => {
              handleSelected(null);
            }}
          >
            <div>
              <h2>
                Il y a X helpeur dans la zone
              </h2>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
      )}
    </div>
  );
};

function Search({ panTo }) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 43.6532, lng: () => -79.3832 },
      radius: 100 * 1000,
    },
  });

  // https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      panTo({ lat, lng });
    }
    catch (error) {
      console.log('😱 Error: ', error);
    }
  };

  return (
    <div className="search">
      <Combobox onSelect={handleSelect}>
        <ComboboxInput
          value={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder="Saisissez une ville ou un pays"
        />
        <ComboboxPopover>
          <ComboboxList>
            {status === 'OK'
              && data.map(({ id, description }) => (
                <ComboboxOption key={id + description} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}

export default MapResults;
