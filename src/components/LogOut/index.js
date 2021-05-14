import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './logOut.scss';

const LogOut = ({ isOpen, close, handleLogOut}) => (

  <div className={isOpen ? 'logOut' : 'logOut__close' }>
    <div className="logOut__modal">
      <h1 className="logOut__modal__title"> Etes-vous sûr de vouloir vous déconnecter ? </h1>
      <div className="logOut__modal__buttons">
        <button className="logOut__modal__buttons__item logOut__modal__buttons__item--cancel" type="button" onClick={close}> Annuler </button>
        <Link to="/" className="logOut__modal__buttons__item" onClick={handleLogOut}> Me déconnecter </Link>
      </div>
    </div>
  </div>
);

LogOut.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  handleLogOut: PropTypes.func.isRequired,
};

export default LogOut;
