/* eslint-disable react/prop-types */
import React from 'react';
import ProfileResult from 'src/components/ProfileResult';
import './profilesResults.scss';

const ProfilesResults = ({usersList}) => {
  console.log(usersList);
  const nbProfile = usersList.length;
  console.log(Array.isArray(usersList));

  return (
    <div className="profilesResults">
      <h1 className="profilesResults__Title">{nbProfile} profils trouvés</h1>
      <ul className="profilesResults__List">
        {usersList.map((profileData) => <ProfileResult key={profileData.id} {...profileData} />)}
      </ul>
    </div>
  );
};


export default ProfilesResults;
