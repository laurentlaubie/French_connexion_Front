import React from 'react';

// == import style
import './modifyProfile.scss';


const ModifyProfile = () => (

  // ----- modify my profil page -----

  <div className="profile">
    <div className="profile__title">Modifier mon profil </div>
      <div className="profile__allinfos">
        <div className="profile__infos">
          <p>jean mi</p>
        </div>
        <div className="profile__interest">
          <p>bieres</p>
        </div>
        <div className="profile__services">
          <p>soirée de fou</p>
        </div>
      </div>
  </div>
);



export default ModifyProfile;
