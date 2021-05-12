import React from 'react';

// == import style
import './siteMap.scss';
import plandusite from 'src/assets/images/plandusite.png';

const SiteMap = () => (

<div className="siteMap">
  <h1 className="siteMap__title" > Plan du site</h1>
  <div className="siteMap__global">
    <img src={plandusite} className="siteMap__global__icon" />
  </div>
</div>

);

export default SiteMap;
