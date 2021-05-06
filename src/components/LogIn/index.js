import React from 'react';
import PropTypes from 'prop-types';

import './logIn.scss';

const LogIn = ({ isOpen, close }) => (
  <div className={isOpen ? 'logIn' : 'logIn__close' }>
    <div className="logIn__modal">
      <h1 className="logIn__modal__title"> Bienvenue sur French Connection </h1>
      <button className="logIn__modal__closeButton" type="button" onClick={close}> X </button>
      <form className="logIn__modal__form">
        <input className="logIn__modal__form__field" type="email" name="email" placeholder="Email" />
        <input className="logIn__modal__form__field" type="password" name="password" placeholder="Mot de passe" />
        <button className="logIn__modal__form__button" type="submit"> Se connecter </button>
      </form>

      <a className="logIn__link" href="#"> Vous n'avez pas encore de compte ?</a>
    </div>
  </div>
);

LogIn.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
};

export default LogIn;
