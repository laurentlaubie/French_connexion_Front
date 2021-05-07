import React from 'react';

// == import style 
import './profileMap.scss';
import colombie from 'src/assets/images/colombie.png';
import placeholder from 'src/assets/images/placeholder.png';

const ProfileMap = () => (

  <div className="profileMap">

    <div className="profileMap__title"> Bogota, Colombie </div>
    <div className="profileMap__map"> <img className="map" src={colombie} alt="carte de Colombie" /> </div>
    {/* <div className="profile__spot"> <img className="spot" src={placeholder} /> </div> */}
  </div>
);

export default ProfileMap;
