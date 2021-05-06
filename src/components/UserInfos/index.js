import React from 'react';

// == import style
import './userInfos.scss';

const UserInfos = () => (

  <div className="userInfos">
    <div className="userInfos__title"> Mes informations personnelles </div>
    <div className="userInfos__list">
      <div className="userInfos__item">Jean-José Dupont</div>
      <div className="userInfos__item">jeanjosé.dupont@gmail.com</div>
      <div className="userInfos__item">17 Allée des Lutins, Massy Palaiseau</div>
      <div className="userInfos__item">France</div>
      <div className="userInfos__item">06.25.25.25.25</div>
    </div>
  </div>


 
);

export default UserInfos;
