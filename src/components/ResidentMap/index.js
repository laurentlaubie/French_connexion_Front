import React from 'react';

// == import style 
import './residentMap.scss';
import colombie from 'src/assets/images/colombie.png';
import placeholder from 'src/assets/images/placeholder.png';


const ResidentMap = () => (

  // ----- Resident's Map -----

  <div className="profilemap">

    <div className="profile__title"> Bogota, Colombie </div>
      <div className="profile__map"> <img className="map" src={colombie} /> </div>
      <div className="profile__spot"> <img className="spot" src={placeholder} /> </div>
     
  </div>
);

export default ResidentMap;
