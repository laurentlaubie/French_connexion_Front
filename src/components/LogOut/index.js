import React from 'react';
import PropTypes from 'prop-types';

import './logOut.scss';

const LogOut = ({ isOpen, close, handleLogOut}) => (

  <div className={isOpen ? 'logOut' : 'logOut__close' }>
    <div className="logOut__modal">
      <h1 className="logOut__modal__title"> Etes-vous sûr de vouloir vous déconnecter ? </h1>
      <div className="logOut__modal__buttons">
        <button className="logOut__modal__buttons__item" type="button" onClick={close}> Annuler </button>
        <button className="logOut__modal__buttons__item" type="button" onClick={handleLogOut}> Me déconnecter </button>
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
