import React from 'react';

// == import style 
import './residentMap.scss';
import colombie from 'src/assets/images/colombie.png';
import placeholder from 'src/assets/images/placeholder.png';

const ResidentMap = () => (

  <div className="residentMap">

    <div className="residentMap__title"> Bogota, Colombie </div>
    <div className="residentMap__map"> <img className="map" src={colombie} /> </div>
    {/* <div className="profile__spot"> <img className="spot" src={placeholder} /> </div> */}
  </div>
);

export default ResidentMap;
