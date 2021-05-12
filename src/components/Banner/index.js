import React from 'react';
import { NavLink } from 'react-router-dom';

// == import Style
import './banner.scss';
// import LogoMobile from 'src/assets/pictures/logo_mobile.png';
import LogoDesktop from 'src/assets/pictures/logo_desktop.png';

const Banner = () => (

  <div className="banner">
    {/* <div className="banner__logo__mobile">
      <img src={LogoMobile} alt="logo French Connection" />
    </div> */}
    <div className="banner__logo__desktop">
    <NavLink to="/">
      <img src={LogoDesktop} alt="logo French Connection" />
    </NavLink>
    </div>
  </div>
);

export default Banner;
