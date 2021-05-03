import React from 'react';
import HomePageTitle from 'src/components/HomePageTitle';
import NavBar from 'src/components/NavBar';

import './headerPages.scss';

const OtherPagesHeader = () => (
  <div className="otherPagesHeader">
    <NavBar />
    <HomePageTitle />
  </div>
);

export default OtherPagesHeader;
