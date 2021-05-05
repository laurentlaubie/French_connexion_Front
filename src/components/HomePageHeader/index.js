import React from 'react';

// import HomePageTitle from 'src/components/HomePageTitle';
import NavBar from 'src/components/NavBar';
import SearchBar from 'src/components/SearchBar';

import header1 from '../../assets/images/cherry-728.svg';

import './homePageHeader.scss';

const HomePageHeader = () => (
  <div className="homePageHeader">
    <div className="homePageHeader__image">
      <img src={header1} alt="Un vieux monsieur qui va prendre l'avion" />
    </div>
    <div className="homePageHeader__content">
      <h1 className="homePageHeader__content__title"> French connection</h1>
      <h2 className="homePageHeader__content__subtitle"> La <span> communauté </span> qui vous aide à voyager</h2>
    </div>
    <div className="homePageHeader__searchbar">
      <SearchBar />
    </div>
  </div>

);

export default HomePageHeader;
