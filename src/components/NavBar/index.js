import React from 'react';

import './navBar.scss';
import network from 'src/assets/pictures/network.png';
import profile from 'src/assets/pictures/profile.png';
import search from 'src/assets/pictures/search.png';

const NavBar = () => (
  
  <div className="navBar">
    <div className="navBar__Rounded">.</div>
    <ul className="navBar__List">
      <li className="navBar__Profile"> <img src={profile} /> <div className="navBar__Title"> Mon Profil  </div> </li>
      <li className="navBar__Network"> <img src={network} /> <div className="navBar__Title"> Notre Réseau </div> </li>
      <li className="navBar__Search"> <img src={search} /> <div className="navBar__Title"> Rechercher </div> </li>
    </ul>
  </div>
);

export default NavBar;

