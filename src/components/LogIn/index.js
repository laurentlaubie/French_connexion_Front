import React from 'react';
import PropTypes from 'prop-types';
import Field from 'src/components/Field';

import './logIn.scss';

const LogIn = ({ isOpen, close, openSignIn, email, password, changeField, handleLogin}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('jappuie sur le bouton se loguer');
    handleLogin();
  };

  return (
    <div className={isOpen ? 'logIn' : 'logIn__close'}>
      <div className="logIn__modal">
        <h1 className="logIn__modal__title"> Bienvenue sur French Connection </h1>
        <button className="logIn__modal__closeButton" type="button" onClick={close}> X </button>
        <form className="logIn__modal__form" onSubmit={handleSubmit}>
          <Field
            className="logIn__modal__form__field"
            name="email"
            placeholder="Adresse Email"
            onChange={changeField}
            value={email}
          />
          <Field
            className="logIn__modal__form__field"
            type="password"
            name="password"
            placeholder="Mot de passe"
            onChange={changeField}
            value={password}
          />
          <button className="logIn__modal__form__button" type="submit"> Se connecter </button>
        </form>

        <button type="button" className="logIn__modal__openSignInButton" onClick={openSignIn}> Vous n'avez pas encore de compte ?</button>
      </div>
    </div>
  );
};

LogIn.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  openSignIn: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
};

export default LogIn;
