import React from 'react';

import './homePageMap.scss';
import HpMap from '../../assets/images/HpMap.png';

// import map from '../../assets/images/world-map.svg';

const HomePageMap = () => (
  <div className="homePageMap">

    <h3 className="homePageMap__title"> Des <span id="Keyword">helpeurs</span> présents tout autour du globe </h3>

    <img src={HpMap} className="homePageMap__image" alt="des helpeurs autour du globe" />

  </div>

);

export default HomePageMap;
