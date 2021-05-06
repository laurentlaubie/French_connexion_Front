/* eslint-disable max-len */
import React from 'react';

import './profilDescription.scss';

const ProfileDescription = () => (
  
  // ----- informations Card -----
  
  <div className="profileDescription">

    <div className="profileDescription__about card">
      <div className="card__title">A propos de moi </div>
      <div className="card__text">
        <p> Humanitatis plerique humanitatis non cum nobilium omnium omnium domicilium retentabant Homerici humanitatis omnium nobilium officiis officiis quod suavitate multiformibus aliquando advenas Lotophagi bacarum quod ut Lotophagi plerique Roma non humanitatis Roma ingenuos autem retentabant aliquando ingenuos non retentabant esset nobilium Roma ingenuos Roma esset non domicilium multiformibus Homerici multiformibus ingenuos. Humanitatis plerique humanitatis non cum nobilium omnium omnium domicilium retentabant Homerici humanitatis omnium nobilium officiis officiis quod suavitate multiformibus aliquando advenas Lotophagi bacarum quod ut Lotophagi plerique Roma non humanitatis Roma ingenuos autem retentabant aliquando ingenuos non retentabant esset nobilium Roma ingenuos Roma esset non domicilium multiformibus Homerici multiformibus ingenuos.</p>
      </div>
    </div>

    <div className="profileDescription__hobbies card">
      <div className="card__title">Mes centres d'interets </div>
      <div className="card__list">
        <div className="card__item">Faire la fete</div>
        <div className="card__item">Sport</div>
        <div className="card__item">Surf</div>
        <div className="card__item">Viste de Musée</div>
        <div className="card__item">Peinture</div>
      </div>
    </div>

  </div>


);

export default ProfileDescription;
