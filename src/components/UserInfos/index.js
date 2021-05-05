import React from 'react';


// == import style 
import './userInfos.scss';


const UserInfos = () => (

  // ----- Description's Card -----

<div className="userinfos">
  <div className="card infos">
    <div className="card__title">Mes informations personnelles </div>
      <div className="info__list">
        <div className="info__item">Jean-José Dupont</div>
        <div className="info__item">jeanjosé.dupont@gmail.com</div>
        <div className="info__item">17 Allée des Lutins, Massy Palaiseau</div>
        <div className="info__item">France</div>
        <div className="info__item">06.25.25.25.25</div>
    </div>
  </div>
</div>


 
);

export default UserInfos;
