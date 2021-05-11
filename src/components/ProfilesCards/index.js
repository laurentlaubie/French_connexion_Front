import React from 'react';
import ProfileCard from 'src/components/ProfileCard';
import './profilesCards.scss';

const ProfilesCards = ({networkProfiles}) => 
{
// console.log(networkProfiles);



  return(
    <div className="profilesCards">
      <h1 className="profilesCards__Title">Notre réseau</h1>
     <ul className="profilesCards__List">
       <li>
       {networkProfiles.map((Profile) => <ProfileCard key={Profile.id} {...Profile} />)}
       </li>
     </ul>
    </div>
  )
}

export default ProfilesCards;
