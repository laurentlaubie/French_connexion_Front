import React from 'react';

import './mapResults.scss';
import franceMap from 'src/assets/pictures/franceMap.gif';

const MapResults = () => (
  <div className="mapResults">
    <img src={franceMap}  className="mapResults__Map"/>
  </div>
);

export default MapResults;
