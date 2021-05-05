import React from 'react';
import { NavLink } from 'react-router-dom';

import './navBar.scss';
import network from 'src/assets/pictures/network.png';
import profile from 'src/assets/pictures/profile.png';
import search from 'src/assets/pictures/search.png';

const NavBar = () => (
  
  <div className="navBar">
    <div className="navBar__rounded">.</div>
    <ul className="navBar__list">
      <li className="navBar__item">
        <NavLink to="/mon-profil">
          <img src={profile} alt="Logo profil" />
          <div className="navBar__title"> Mon Profil  </div>
        </NavLink>
      </li>
      <li className="navBar__item">
        <NavLink to="/notre-reseau">
          <img src={network} alt="Logo reseau" />
          <div className="navBar__title"> Notre Réseau  </div>
        </NavLink>
      </li>
      <li className="navBar__item">
        <NavLink to="/">
          <img src={search} alt="Logo recherche" />
          <div className="navBar__title"> Rechercher  </div>
        </NavLink>
      </li>
    </ul>
  </div>
);

export default NavBar;

