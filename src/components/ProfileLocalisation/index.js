import React from 'react';
import PropTypes from 'prop-types';

//==import Local
import MapProfile from 'src/containers/MapProfile';


// == import style
import './profileLocalisation.scss';
import colombie from 'src/assets/images/colombie.png';
//import MapProfile from '../MapProfile';

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
      <div className="profileLocalisation__map"> <MapProfile latProp={latitude} lngProp={longitude} /> </div>
    </div>
  );
};
// ProfileLocalisation.propTypes = {
//   cityId: PropTypes.number.isRequired,
//   cityName: PropTypes.string.isRequired,
//   countryName: PropTypes.string.isRequired,
// };

export default ProfileLocalisation;
