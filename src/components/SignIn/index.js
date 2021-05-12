import React from 'react';
import PropTypes from 'prop-types';

import Field from 'src/components/Field';

import './signIn.scss';

const SignIn = ({ isOpen, close, openLogIn, firstName, lastName, email, password, confirmedPassword, changeField, handleSignIn }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleSignIn();
  };

  return (
    <div className={isOpen ? 'signIn' : 'signIn__close' }>
      <div className="signIn__modal">
        <h1 className="signIn__modal__title"> Créez votre compte </h1>
        <button className="signIn__modal__closeButton" type="button" onClick={close}> X </button>
        <form className="signIn__modal__form">
          <Field
            name="firstName"
            placeholder="Prénom"
            onChange={changeField}
            value={firstName}
          />
          <Field
            name="lastName"
            placeholder="Nom"
            onChange={changeField}
            value={lastName}
          />
          <Field
            name="email"
            placeholder="Email"
            onChange={changeField}
            value={email}
          />
          <Field
            name="password"
            type="password"
            placeholder="Mot de passe"
            onChange={changeField}
            value={password}
          />
          <Field
            name="confirmedPassword"
            type="confirmedPassword"
            placeholder="Confirmer votre mot de passe"
            onChange={changeField}
            value={confirmedPassword}
          />

          <button className="signIn__modal__form__button" type="submit" onSubmit={handleSubmit}> S'inscrire </button>
        </form>

        <button type="button" className="signIn__modal__openLogInButton" onClick={openLogIn}> Vous avez déjà un compte ?</button>
      </div>
    </div>
  );
};


SignIn.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  openLogIn: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  confirmedPassword: PropTypes.string.isRequired,
  changeField : PropTypes.func.isRequired,
  handleSignIn: PropTypes.func.isRequired,
};

export default SignIn;
