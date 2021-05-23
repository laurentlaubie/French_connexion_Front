import React from 'react';
import Logo from 'src/components/Logo';
import NavBar from 'src/containers/NavBar';

import './header.scss';

const Header = () => (
  <div className="header">
    <NavBar />
    <Logo />
  </div>
);

export default Header;
