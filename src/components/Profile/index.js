import React from 'react';

import './profile.scss';
import profile from 'src/assets/pictures/profile.png';

const Profile = ({id,name,description}) => (
  <div className="profile">
    <div className="profile__LeftFlex">
      <img src={profile}  className="profile__Picture"/>
    </div>
    <div className="profile__RightFlex">
      <div className="profile__Name">{name}</div>
      <div className="profile__Description">{description}</div>
    </div>
    
    
  </div>
);

export default Profile;
