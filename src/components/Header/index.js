import React from 'react';
import HomePageTitle from 'src/components/HomePageTitle';
import NavBar from 'src/components/NavBar';

import './header.scss';

const Header = () => (
  <div className="header">
    <NavBar />
    <HomePageTitle />
  </div>
);

export default Header;
