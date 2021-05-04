import React from 'react';
import Profile from 'src/components/Profile';
import './profilesResults.scss';

const ProfilesResults = ({data}) => 
{
console.log(data);


  return(
    <div className="profilesResults">
      <h1 className="profilesResults__Title">3 profils trouvés</h1>
     <ul>
       <li>
       {data.map((profileData) => <Profile key={profileData.id} {...profileData} />)}
       </li>
     </ul>
    </div>
  )
}

export default ProfilesResults;
