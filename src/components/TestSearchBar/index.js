import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

import './testSearchBar.scss';
import search from 'src/assets/pictures/search.png';

const TestSearchBar = ({Tadress, TsetAdress, Tcoordinates, TsetCenter}) => {
  const [address, setAddress] = React.useState("");
  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    lng: null,
  });

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    TsetAdress(value);
    setCoordinates(latLng);
    TsetCenter(latLng);
    console.log(address);
  };

  return (
    <div className="TestSearchBar">
      <PlacesAutocomplete
        value={Tadress}
        onChange={TsetAdress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <p>Latitude: {coordinates.lat}</p>
            <p>Longitude: {coordinates.lng}</p>
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
