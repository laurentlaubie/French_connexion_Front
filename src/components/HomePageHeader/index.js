import React from 'react';

// import HomePageTitle from 'src/components/HomePageTitle';
import SearchBar from 'src/containers/SearchBar';

import './homePageHeader.scss';

const HomePageHeader = () => (
  <div className="homePageHeader">
    <div className="homePageHeader__image" />
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
