import React from 'react';

import './signIn.scss';

const SignIn = () => (
  <div className="signIn">
    <div className="signIn__modal">
      <h1 className="signIn__modal__title"> Bienvenue sur French Connection </h1>
      <button className="signIn__modal__closeButton" type="button"> X </button>
      <form className="signIn__modal__form">
        <input className="signIn__modal__form__field" type="email" name="email" placeholder="Email" />
        <input className="signIn__modal__form__field" type="password" name="password" placeholder="Mot de passe" />
        <button className="signIn__modal__form__button" type="submit"> Se connecter </button>
      </form>

      <a className="signIn__link" href="#" > Vous n'avez pas encore de compte ?</a>
    </div>
  </div>
);

export default SignIn;
