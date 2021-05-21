/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
// import SearchBar from 'src/containers/SearchBar';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

import './modifyCity.scss';

const ModifyCity = ({ isOpen, close, address, setNewAddress, saveNewAddress }) => {
  // const handleSubmit = (evt) => {
  //   evt.preventDefault();
  //   console.log('j\'enregistre ma nouvelle ville');
  //   handleModifyCity();
  // };

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    setNewAddress(value);

    console.log(results);
    const addressComponents = results[0].address_components;
    console.log(addressComponents);
    const city = addressComponents.find(
      (component) => component.types.includes('locality'),
    );
    const cityName = city.long_name;
    console.log(cityName);
    const country = addressComponents.find(
      (component) => component.types.includes('country'),
    );
    const countryName = country.long_name;
    console.log(countryName);

    const latLng = await getLatLng(results[0]);
    const { lat, lng } = { ...latLng };
    console.log(lat);
    console.log(lng);

    const completeAddress = [cityName, countryName, lat, lng];
    saveNewAddress(completeAddress);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // On force le changement d'url vers /resultats
    // history.push('/resultats');
    console.log('j\'enregistre ma nouvelle ville');
    close();
    // saveNewAddress(cityName, countryName, lat, lng);
  };

  return (
    <div className={isOpen ? 'modifyCity' : 'modifyCity__close'}>
      <div className="modifyCity__modal">
        <h1 className="modifyCity__modal__title"> Modifier votre ville de résidence </h1>
        <button className="modifyCity__modal__closeButton" type="button" onClick={close}> X </button>
        <div className="SearchBar">
          <PlacesAutocomplete
            value={address}
            onChange={setNewAddress}
            onSelect={handleSelect}
            searchOptions={{ types: ['geocode'] }}
          >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
              <div>
                <div className="SearchBar__form">
                  <input className="SearchBar__mainInput" {...getInputProps({ placeholder: 'Saisissez votre recherche' })} />
                  <input type="submit" className="SearchBar__submit" value="" onClick={handleSubmit} />
                </div>
                <div>
                  {loading ? <div>...loading</div> : null}

                  {suggestions.map((suggestion) => {
                    const style = {
                      backgroundColor: suggestion.active ? '#41b6e6' : '#fff',
                    };

                    return (
                      <div {...getSuggestionItemProps(suggestion, { style })}>
                        {suggestion.description}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete>
        </div>
      </div>
    </div>
  );
};

ModifyCity.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  address: PropTypes.string.isRequired,
  setNewAddress: PropTypes.func.isRequired,
  saveNewAddress: PropTypes.func.isRequired,
  // handlemodifyCity: PropTypes.func.isRequired,
};

export default ModifyCity;
