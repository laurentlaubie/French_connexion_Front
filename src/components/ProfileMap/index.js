import React from 'react';
import PropTypes from 'prop-types';

// == import style
import './profileMap.scss';
import colombie from 'src/assets/images/colombie.png';

const ProfileMap = ({ cityId, cityName, countryName }) => (

  <div className="profileMap">

    <div className="profileMap__title"> {cityName}, {countryName} </div>
    <div className="profileMap__map"> <img className="map" src={colombie} alt="carte de Colombie" /> </div>
    {/* <div className="profile__spot"> <img className="spot" src={placeholder} /> </div> */}
  </div>
);

ProfileMap.propTypes = {
  cityId: PropTypes.number.isRequired,
  cityName: PropTypes.string.isRequired,
  countryName: PropTypes.string.isRequired,
};

export default ProfileMap;
