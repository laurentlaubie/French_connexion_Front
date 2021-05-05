import React from 'react';

import header1 from '../../assets/images/cherry-728.svg';

import './homePageTitle.scss';
import LogoMobile from 'src/assets/pictures/logo_mobile.png';
import LogoDesktop from 'src/assets/pictures/logo_desktop.png';


const HomePageTitle = () => (

  <div className="homePageTitle">
    <img src={LogoMobile} className="homePageTitle__logo__mobile" />
    <img src={LogoDesktop} className="homePageTitle__logo__desktop" />
  </div>
);

export default HomePageTitle;
