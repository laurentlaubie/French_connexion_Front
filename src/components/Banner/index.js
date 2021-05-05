import React from 'react';

import './banner.scss';
import LogoMobile from 'src/assets/pictures/logo_mobile.png';
import LogoDesktop from 'src/assets/pictures/logo_desktop.png';

const Banner = () => (

  <div className="banner">
    <img src={LogoMobile} className="banner__logo__mobile" />
    <img src={LogoDesktop} className="banner__logo__desktop" />
  </div>
);

export default Banner;
