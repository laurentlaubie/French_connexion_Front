import React from 'react';

import './searchBar.scss';

const SearchBar = () => (
  <div className="searchBar">
    <form>
    <input className="searchBar__input" type="text" placeholder="Saisis ta recherche ..." />
    </form>
  </div>
);

export default SearchBar;
