import React from 'react';
import PropTypes from 'prop-types';

import './signIn.scss';

const SignIn = ({ isOpen, close, openLogIn }) => (
  <div className={isOpen ? 'signIn' : 'signIn__close' }>
    <div className="signIn__modal">
      <h1 className="signIn__modal__title"> Créez votre compte </h1>
      <button className="signIn__modal__closeButton" type="button" onClick={close}> X </button>
      <form className="signIn__modal__form">
        <input className="signIn__modal__form__field" type="firstName" name="firstName" placeholder="Prénom" />
        <input className="signIn__modal__form__field" type="password" name="password" placeholder="Nom" />
        <input className="signIn__modal__form__field" type="email" name="email" placeholder="Email" />
        <input className="signIn__modal__form__field" type="password" name="password" placeholder="Mot de passe" />
        <input className="signIn__modal__form__field" type="password" name="passwordConfirm" placeholder="Confirmez votre mot de passe" />

        <button className="signIn__modal__form__button" type="submit"> S'inscrire </button>
      </form>

      <button type="button" className="signIn__modal__openLogInButton" onClick={openLogIn}> Vous avez déjà un compte ?</button>
    </div>
  </div>
);

SignIn.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  openLogIn: PropTypes.func.isRequired,
};

export default SignIn;
