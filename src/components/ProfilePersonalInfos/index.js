import React from 'react';

// == import style
import './profilePersonalInfos.scss';

const ProfilePersonalInfos = () => (

  <div className="profilePersonalInfos">
    <div className="profilePersonalInfos__title"> Mes informations personnelles </div>
    <div className="profilePersonalInfos__list">
      <div className="profilePersonalInfos__item">Jean-José Dupont</div>
      <div className="profilePersonalInfos__item">jeanjosé.dupont@gmail.com</div>
      <div className="profilePersonalInfos__item">17 Allée des Lutins, Massy Palaiseau</div>
      <div className="profilePersonalInfos__item">France</div>
      <div className="profilePersonalInfos__item">06.25.25.25.25</div>
    </div>
  </div>


 
);

export default ProfilePersonalInfos;
