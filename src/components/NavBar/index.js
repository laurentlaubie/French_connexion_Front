import React from 'react';

import './navBar.scss';

const NavBar = () => (
  <div className="navBar">
    <ul className="navBar__List">
      <li className="navBar__Profile"> Mon Profil se_connecter </li>
      <li className="navBar__Network"> Notre Réseau </li>
      <li className="navBar__Search"> Rechercher </li>
    </ul>
  </div>
);

export default NavBar;

