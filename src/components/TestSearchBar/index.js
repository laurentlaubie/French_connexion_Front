import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

import './testSearchBar.scss';
import search from 'src/assets/pictures/search.png';

const TestSearchBar = ({adress, setAdress, setCenter}) => {
    const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAdress(value);
    setCenter(latLng);
  };

  return (
    <div className="TestSearchBar">
      <PlacesAutocomplete
        value={adress}
        onChange={setAdress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <form className="TestSearchBar__form">
              <input className="TestSearchBar__mainInput" {...getInputProps({ placeholder: "Saisissez votre recherche" })} />
              <img src={search} className="TestSearchBar__icon" alt="Search Icon" />
            </form>
            <div>
              {loading ? <div>...loading</div> : null}

              {suggestions.map(suggestion => {
                const style = {
                  backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
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
  );
};
export default TestSearchBar;
