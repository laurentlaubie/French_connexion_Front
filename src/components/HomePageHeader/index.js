import React from 'react';

import HomePageTitle from 'src/components/HomePageTitle';
import NavBar from 'src/components/NavBar';
import SearchBar from 'src/components/SearchBar';

import './homePageHeader.scss';

const HomePageHeader = () => (
  <div className="homePageHeader">
    Je suis le composant homePageHeader
    <HomePageTitle />
    <NavBar />
    <SearchBar />
  </div>
);

export default HomePageHeader;
