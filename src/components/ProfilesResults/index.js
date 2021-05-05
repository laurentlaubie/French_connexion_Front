import React from 'react';
import ProfileResult from 'src/components/ProfileResult';
import './profilesResults.scss';

const ProfilesResults = ({data}) => 
{
console.log(data);


  return(
    <div className="profilesResults">
      <h1 className="profilesResults__Title">6 profils trouvés</h1>
     <ul className="profilesResults__List">
       <li>
       {data.map((profileData) => <ProfileResult key={profileData.id} {...profileData} />)}
       </li>
     </ul>
    </div>
  )
}

export default ProfilesResults;
