import React from 'react';

import './profile.scss';

const Profile = ({id,name,description}) => (
  <div className="profile">
    <div className="profile__name">{name}</div>
    <div className="profile__description">{description}</div>
    
  </div>
);

export default Profile;
