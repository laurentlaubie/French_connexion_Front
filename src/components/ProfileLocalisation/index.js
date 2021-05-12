import React from 'react';
import PropTypes from 'prop-types';

// == import style
import './profileLocalisation.scss';
import colombie from 'src/assets/images/colombie.png';

const ProfileLocalisation = ({ name, longitude, latitude, country }) => {
  let countryName = '';
  if (country != null) {
    countryName = country.name;
  }
  else {
    countryName = '';
  }

  return (
    <div className="profileLocalisation">
      <div className="profileLocalisation__title"> {name}, {countryName} </div>
      <div className="profileLocalisation__map"> <img className="map" src={colombie} alt="carte de Colombie" /> </div>
    </div>
  );
};
// ProfileLocalisation.propTypes = {
//   cityId: PropTypes.number.isRequired,
//   cityName: PropTypes.string.isRequired,
//   countryName: PropTypes.string.isRequired,
// };

export default ProfileLocalisation;
