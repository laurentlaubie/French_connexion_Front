import React from 'react';
import Banner from 'src/components/Banner';
import NavBar from 'src/components/NavBar';

import './header.scss';

const Header = () => (
  <div className="header">
    <NavBar />
    <Banner />
  </div>
);

export default Header;
