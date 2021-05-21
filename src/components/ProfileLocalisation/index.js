import React from 'react';
import PropTypes from 'prop-types';

//==import Local
import MapProfile from 'src/containers/MapProfile';


// == import style
import './profileLocalisation.scss';
import colombie from 'src/assets/images/colombie.png';
//import MapProfile from '../MapProfile';

const ProfileLocalisation = ({ name, longitude, latitude, country, isMyProfile, username }) => {
  // let countryName = '';
  // if (country != null) {
  //   countryName = country.frenchName;
  // }
  // else {
  //   countryName = '';
  // }

  let emptyMessage = '';
  if (isMyProfile){
    emptyMessage = 'Vous n\'avez pas indiqué votre ville de résidence.' ;
  }
  else{
    emptyMessage = `${username} n'a pas indiqué sa ville de résidence.`;
  }

  return (
    <div className="profileLocalisation">
      <div className="profileLocalisation__title"> {name != '' ? `${name}, ${country.frenchName}` : '' }</div>
      <div className="profileLocalisation__empty"> {name === '' ? emptyMessage : '' }</div>
      <div className="profileLocalisation__map"> 
        {name != '' && <MapProfile latProp={latitude} lngProp={longitude} />}
      </div>
    </div>
  );
};

ProfileLocalisation.propTypes = {
  name: PropTypes.string,
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  country: PropTypes.string,
  isMyProfile: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired,
};

ProfileLocalisation.defaultProps = {
  name: '',
  longitude: '',
  latitude: '',
  country: '',
}

export default ProfileLocalisation;
