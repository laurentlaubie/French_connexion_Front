import React from 'react';
import PropTypes from 'prop-types';

import MapProfile from 'src/containers/MapProfile';

// == import style
import './profileLocalisation.scss';

const ProfileLocalisation = ({ name, longitude, latitude, country, isMyProfile, username }) => {
  let emptyMessage = '';
  if (isMyProfile) {
    emptyMessage = 'Vous n\'avez pas indiqué votre ville de résidence.';
  }
  else {
    emptyMessage = `${username} n'a pas indiqué sa ville de résidence.`;
  }

  return (
    <div className="profileLocalisation">
      <div className="profileLocalisation__title"> {name !== '' ? `${name}, ${country.frenchName}` : '' }</div>
      <div className="profileLocalisation__empty"> {name === '' ? emptyMessage : '' }</div>
      <div className="profileLocalisation__map">
        {name !== '' && <MapProfile latProp={latitude} lngProp={longitude} />}
      </div>
    </div>
  );
};

ProfileLocalisation.propTypes = {
  name: PropTypes.string,
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  country: PropTypes.objectOf(
    PropTypes.shape(
      {
        id: PropTypes.number.isRequired,
        frenchName: PropTypes.string.isRequired,
      },
    ),
  ),
  isMyProfile: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired,
};

ProfileLocalisation.defaultProps = {
  name: '',
  longitude: '',
  latitude: '',
  country: '',
};

export default ProfileLocalisation;
