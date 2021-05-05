import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './navBar.scss';
import network from 'src/assets/pictures/network.png';
import profile from 'src/assets/pictures/profile.png';
import search from 'src/assets/pictures/search.png';

const NavBar = ({ isConnected }) => (
  <div className="navBar">
    <div className="navBar__rounded">.</div>
    <ul className="navBar__list">
      <li className="navBar__item">
        <NavLink to="/mon-profil">
          <img src={profile} alt="Logo profil" />
          <div className="navBar__title"> { (isConnected) ? 'Mon Profil' : 'Se connecter' } </div>
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

NavBar.propTypes = {
  isConnected: PropTypes.bool.isRequired,
};

export default NavBar;
