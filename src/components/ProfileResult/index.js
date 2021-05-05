import React from 'react';

import './profileResult.scss';
import profile from 'src/assets/pictures/profile.png';

const ProfileResult = ({id,name,description}) => (
  <div className="profileResult">
    <div className="profileResult__LeftFlex">
      <img src={profile}  className="profileResult__Picture"/>
    </div>
    <div className="profileResult__RightFlex">
      <div className="profileResult__Name">{name}</div>
      <div className="profileResult__Description">{description}</div>
    </div>
    
    
  </div>
);

export default Profile;
