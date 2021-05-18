import React from 'react';

import './profileResult.scss';
import profile from 'src/assets/pictures/profile.png';

const ProfileResult = ({id,firstname,biography,nickname,lastname}) => (
  <div className="profileResult">
    <div className="profileResult__LeftFlex">
      <img src={profile}  className="profileResult__Picture"/>
    </div>
    <div className="profileResult__RightFlex">
      <div className="profileResult__Name">{nickname != null ? nickname : `${firstname} ${lastname}`}</div>
      <div className="profileResult__Description">{biography}</div>
    </div>
    
    
  </div>
);

export default ProfileResult;
