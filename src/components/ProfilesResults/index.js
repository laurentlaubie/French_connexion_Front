/* eslint-disable react/prop-types */
import React from 'react';
import ProfileResult from 'src/components/ProfileResult';
import './profilesResults.scss';

const ProfilesResults = ({ usersList, usersByCity, cityName, avatar, isConnected, openModal }) => {
  console.log(usersList);
  const nbProfile = usersByCity.length;
  console.log(Array.isArray(usersList));

  return (
    <div className="profilesResults">
      { usersList &&
      <div className="profilesResults__Header">
      <h1 className="profilesResults__City">{cityName}</h1>
      <h2 className="profilesResults__SearchResult">{nbProfile} profil(s) trouvé(s)</h2>
      </div>
      }
      <ul className="profilesResults__List">
        {usersByCity ? usersByCity.map((profileData) => <ProfileResult key={profileData.id} {...profileData} />) : usersList.map((profileData) => <ProfileResult key={profileData.id} {...profileData} isConnected={isConnected} openModal={openModal} />)}
      </ul>
    </div>
  );
};


export default ProfilesResults;
