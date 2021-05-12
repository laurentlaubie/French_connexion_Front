import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { withRouter, useHistory } from 'react-router-dom';
import './searchBar.scss';

const SearchBar = ({adress, setAdress, setCenter}) => {
  // Methode gérant le clic sur une suggestion
  // on transforme le nom saisi en coordonées
  // on met à jour la valeur de l'input dans le state
  // le center est utile pour /resultats
  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAdress(value);
    setCenter(latLng);
  };

  // on crée une instance de useHistory
  const history = useHistory();

  const handleSubmitClick = (evt) => {
    evt.preventDefault();
    // On force le changement d'url vers /resultats
    history.push('/resultats');
  };

  return (
    <div className="SearchBar">
      <PlacesAutocomplete
        value={adress}
        onChange={setAdress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <form className="SearchBar__form">
              <input className="SearchBar__mainInput" {...getInputProps({ placeholder: "Saisissez votre recherche" })} />
              <input type="submit" className="SearchBar__submit" value="" onClick={handleSubmitClick}/>
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
export default withRouter(SearchBar);
