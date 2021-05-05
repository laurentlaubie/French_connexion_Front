import React from 'react';
import PropTypes from 'prop-types';

import './signIn.scss';

const SignIn = ({ isOpen, close }) => (
  <div className={isOpen ? 'signIn' : 'signIn__close' }>
    <div className="signIn__modal">
      <h1 className="signIn__modal__title"> Bienvenue sur French Connection </h1>
      <button className="signIn__modal__closeButton" type="button" onClick={close}> X </button>
      <form className="signIn__modal__form">
        <input className="signIn__modal__form__field" type="email" name="email" placeholder="Email" />
        <input className="signIn__modal__form__field" type="password" name="password" placeholder="Mot de passe" />
        <button className="signIn__modal__form__button" type="submit"> Se connecter </button>
      </form>

      <a className="signIn__link" href="#"> Vous n'avez pas encore de compte ?</a>
    </div>
  </div>
);

SignIn.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
};

export default SignIn;
