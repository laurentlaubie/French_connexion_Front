import React from 'react';
import './searchBar.scss';
import search from 'src/assets/pictures/search.png';

const SearchBar = () => (
  <div className="searchBar">
    <form className="searchBar__form">
      <input className="searchBar__input" type="text" placeholder="Saisis ta recherche ..." /><img src={search} className="searchBar__icon" />
    </form>
    
  </div>

);

export default SearchBar;
