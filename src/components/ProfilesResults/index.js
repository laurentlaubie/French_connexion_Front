/* eslint-disable max-len */
import React from 'react';
import ProfileResult from 'src/containers/ProfileResult';
import PropTypes from 'prop-types';
import './profilesResults.scss';

const ProfilesResults = ({ usersList, usersByCity, cityName }) => {
  // console.log(usersList);
  // console.log(usersByCity);
  // console.log(cityName);
  const nbProfile = usersByCity.length;
  // console.log(Array.isArray(usersList));

  return (
    <div className="profilesResults">
      { usersList && (
        <div className="profilesResults__Header">
          <h1 className="profilesResults__City">{cityName}</h1>
          <h2 className="profilesResults__SearchResult">{nbProfile} profil(s) trouvé(s)</h2>
        </div>
      )}
      <ul className="profilesResults__List">
        {usersByCity ? usersByCity.map((profileData) => <ProfileResult key={profileData.id} {...profileData} />) : usersList.map((profileData) => <ProfileResult key={profileData.id} {...profileData} />)}
      </ul>
    </div>
  );
};

ProfilesResults.propTypes = {
  usersList: PropTypes.array.isRequired,
  usersByCity: PropTypes.arrayOf(
    PropTypes.shape(
      {
        id: PropTypes.number.isRequired,
      },
    ).isRequired,
  ).isRequired,
  cityName: PropTypes.string.isRequired,
};

export default ProfilesResults;
