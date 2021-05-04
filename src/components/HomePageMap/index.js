import React from 'react';

import './homePageMap.scss';

import map from '../../assets/images/world-map.svg';


const HomePageMap = () => (
  <div 
    className="homePageMap"
    style={{ backgroundImage: `url(${map})` }}
  >
    <h3> Présents dans 56 pays ! </h3>

  </div>
);

export default HomePageMap;
