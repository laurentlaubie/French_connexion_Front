import React from 'react';

import HomePageTitle from 'src/components/HomePageTitle';
import NavBar from 'src/components/NavBar';
import SearchBar from 'src/components/SearchBar';

import header1 from '../../assets/images/cherry-728.svg';

import './homePageHeader.scss';

const HomePageHeader = () => (
  <div
    className="homePageHeader"
    style={{ backgroundImage: `url(${header1})` }}
  >
    <NavBar />
    <HomePageTitle />
    <SearchBar />
  </div>
);

export default HomePageHeader;
