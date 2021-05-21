/* eslint-disable react/prop-types */
import React from 'react';
import ProfileResult from 'src/components/ProfileResult';
import './profilesResults.scss';

const ProfilesResults = ({ usersList, usersByCity, cityName }) => {
  console.log(usersList);
  const nbProfile = usersByCity.length;
  console.log(Array.isArray(usersList));

  return (
    <div className="profilesResults">
      <h1 className="profilesResults__Title">{nbProfile} profil(s) trouvé(s)</h1>
      <h2 className="profilesResults__city">{cityName}</h2>
      <ul className="profilesResults__List">
        {usersByCity ? usersByCity.map((profileData) => <ProfileResult key={profileData.id} {...profileData} />) : usersList.map((profileData) => <ProfileResult key={profileData.id} {...profileData} />)}
      </ul>
    </div>
  );
};


export default ProfilesResults;
