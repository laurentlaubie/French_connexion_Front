import React from 'react';
import { NavLink } from 'react-router-dom';

// == import Style
import './logo.scss';
import logo2 from 'src/assets/images/logo2.png';

const Logo = () => (

  <div className="banner">
    <NavLink to="/">
      <div className="banner__logo">
        <img src={logo2} alt="logo French Connection" className="banner__logo__image" />
        <div className="banner__logo__title">
          <p className="banner__logo__title__content"> French </p>
          <p className="banner__logo__title__content banner__logo__title__content--red"> Connection </p>
        </div>
      </div>
    </NavLink>
  </div>
);

export default Logo;
