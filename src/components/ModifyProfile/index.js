/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Field from 'src/components/Field';
import TextArea from 'src/components/TextArea';
import ModifyCity from 'src/containers/ModifyCity';
import Loading from 'src/components/Loading';
import ModifyMyHobbies from 'src/containers/ModifyMyHobbies';
import ProfilePrincipalInfos from 'src/components/ProfilePrincipalInfos';
import ModifyHelperSection from 'src/containers/ModifyHelperSection';
import ProfileButton from 'src/components/ProfileButton';

// == Import style
import './modifyProfile.scss';

const ModifyProfile = ({
  connectedUserData,
  changeField,
  changePasswordField,
  modifyProfile,
  openModal,
  userAddress,
  isLoaded,
  loadHobbiesList,
  loadServicesList,
  redirection,
  isConnected,
  newPassword,
  confirmedNewPassword,
  // newPassword,
  // confirmedNewPassword,

}) => {
  const userId = connectedUserData.id;

  const [firstnameErrorMessage, setFirstnameErrorMessage] = useState('');
  const [lastnameErrorMessage, setLastnameErrorMessage] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('je souhaite envoyer mon formulaire');

    let myHobbiesList = [];
    connectedUserData.hobbies.map((hobby) => {
      myHobbiesList = [...myHobbiesList, hobby.id];
    });
    console.log(myHobbiesList);

    let myServicesList = [];
    connectedUserData.services.map((service) => {
      myServicesList = [...myServicesList, service.id];
    });
    console.log(myServicesList);

    // reset of error messages
    setFirstnameErrorMessage('');
    setLastnameErrorMessage('');
    setEmailErrorMessage('');
    setPasswordErrorMessage('');

    console.log(connectedUserData.newPassword);

    let nbError = 0;
    const emailFormat = new RegExp(/^\S+@\S+\.\S+$/);

    if (connectedUserData.firstname === '') {
      setFirstnameErrorMessage('Ce champ ne doit pas être vide');
      nbError += 1;
    }
    if (connectedUserData.lastname === '') {
      setLastnameErrorMessage('Ce champ ne doit pas être vide');
      nbError += 1;
    }
    if (connectedUserData.email === '') {
      setEmailErrorMessage('Ce champ ne doit pas être vide');
      nbError += 1;
    }
    if (!emailFormat.test(connectedUserData.email)) {
      setEmailErrorMessage('Cet email n\'est pas valide');
      nbError += 1;
    }
    if (newPassword !== confirmedNewPassword) {
      setPasswordErrorMessage('Les mots de passe ne correspondent pas');
      nbError += 1;
    }
    if (nbError === 0) {
      console.log('il ny a pas derreur');
      modifyProfile(userId, myHobbiesList, myServicesList);
    }
  };

  useEffect(() => {
    console.log('useEffect');
    loadHobbiesList();
    loadServicesList();
  }, []);

  return (
    <>
      {!isConnected && <Redirect to="/" />}
      {redirection && <Redirect to="/mon-profil" />}

      <div className="modifyProfile">
        <h1 className="modifyProfile__title"> Modifier mon profil </h1>
        <div className="modifyProfile__content">
          <div className="modifyProfile__principalInfos">
            <ProfilePrincipalInfos {...connectedUserData} isMyProfile />
          </div>
          <form className="modifyProfile__form" onSubmit={handleSubmit}>

            <div className="modifyProfile__form__section">
              <h2 className="modifyProfile__form__section__title"> Informations personnelles</h2>
              <div className="modifyProfile__form__subsection">
                <h3 className="modifyProfile__form__subsection__title"> Les informations de votre compte </h3>
                <div className="modifyProfile__form__section__content">

                  <div className="modifyProfile__form__section__fieldGroup">
                    <div className="modifyProfile__form__label">
                      {firstnameErrorMessage && (
                        <div className="modifyProfile__form__errorMessage"> {firstnameErrorMessage} </div>
                      )}
                      <div className="modifyProfile__form__label__name"> Prénom </div>
                      <Field
                        className="modifyProfile__form__field"
                        name="firstname"
                        placeholder="Ex: Martin"
                        onChange={changeField}
                        value={connectedUserData.firstname}
                      />
                    </div>
                    <div className="modifyProfile__form__label" htmlFor="lastname">
                      {lastnameErrorMessage && (
                        <div className="modifyProfile__form__errorMessage"> {lastnameErrorMessage} </div>
                      )}
                      <div className="modifyProfile__form__label__name">Nom </div>
                      <Field
                        className="modifyProfile__form__field"
                        name="lastname"
                        placeholder="Ex: Dupont"
                        onChange={changeField}
                        value={connectedUserData.lastname}
                      />
                    </div>
                  </div>

                  <div className="modifyProfile__form__label" htmlFor="nickname">
                    <div className="modifyProfile__form__label__name"> Nom d'utilisateur </div>
                    <Field
                      className="modifyProfile__form__field"
                      name="nickname"
                      placeholder="Ex: Martin88"
                      onChange={changeField}
                      value={connectedUserData.nickname}
                    />
                  </div>
                  <div className="modifyProfile__form__label" htmlFor="email">
                    {emailErrorMessage && (
                      <div className="modifyProfile__form__errorMessage"> {emailErrorMessage} </div>
                    )}
                    <div className="modifyProfile__form__label__name"> Email </div>
                    <Field
                      className="modifyProfile__form__field"
                      name="email"
                      placeholder="Email@exemple.com"
                      onChange={changeField}
                      value={connectedUserData.email}
                      type="email"
                    />
                  </div>
                  <div className="modifyProfile__form__section__fieldGroup">
                    {passwordErrorMessage && (
                      <div className="modifyProfile__form__errorMessage"> {passwordErrorMessage} </div>
                    )}
                    <div className="modifyProfile__form__label" htmlFor="password">
                      <div className="modifyProfile__form__label__name"> Mot de passe </div>
                      <Field
                        className="modifyProfile__form__field"
                        name="newPassword"
                        placeholder="Nouveau mot de passe"
                        onChange={changePasswordField}
                        value={newPassword}
                        type="password"
                      />
                    </div>
                    <div className="modifyProfile__form__label" htmlFor="password">
                      <div className="modifyProfile__form__label__name"> Confirmer le mot de passe </div>
                      <Field
                        className="modifyProfile__form__field"
                        name="confirmedNewPassword"
                        placeholder="Confirmez votre mot de passe"
                        onChange={changePasswordField}
                        value={confirmedNewPassword}
                        type="password"
                      />
                    </div>
                  </div>

                  <div className="modifyProfile__form__label" htmlFor="phoneNumber">
                    <div className="modifyProfile__form__label__name">Numéro de téléphone </div>
                    <Field
                      className="modifyProfile__form__field"
                      name="phoneNumber"
                      placeholder="Ex: 06 34 34 34 34"
                      onChange={changeField}
                      value={connectedUserData.phoneNumber}
                    />
                  </div>
                </div>
              </div>

              <div className="modifyProfile__form__subsection">
                <h3 className="modifyProfile__form__subsection__title"> Votre ville de résidence </h3>
                <div className="modifyProfile__form__label">
                  <div className="modifyProfile__form__city">
                    {connectedUserData.cities != null && userAddress === '' ? `Votre ville de résidence est ${connectedUserData.cities.name}, ${connectedUserData.cities.country.frenchName}.` : ''}
                  </div>
                  <button className="modifyProfile__form__city__button" type="button" onClick={openModal}> Changer de ville </button>
                  <ModifyCity />
                </div>
              </div>

            </div>

            <div className="modifyProfile__form__section">
              <h2 className="modifyProfile__form__section__title"> A propos de vous </h2>
              <div className="modifyProfile__form__section__content">

                <div className="modifyProfile__form__subsection">
                  <h3 className="modifyProfile__form__subsection__title"> Présentationyarn </h3>
                  <div className="modifyProfile__form__label" htmlFor="biography">
                    <TextArea
                      className="modifyProfile__form__textarea"
                      name="biography"
                      placeholder="Ecrivez-ici un petit texte de présentation, pour que nos utilisateurs apprennent à vous connaitre"
                      onChange={changeField}
                      value={connectedUserData.biography}
                    />
                  </div>
                </div>
                {isLoaded && <ModifyMyHobbies />}
              </div>
            </div>
            <div id="helperSection">
              <ModifyHelperSection />
            </div>
            <div className="modifyProfile__buttons">
              <ProfileButton type="link" textContent="Annuler" color="gray" linkTo="/mon-profil" />
              <ProfileButton type="hashlink" textContent="Enregistrer mes modifications" color="blue" onClick={handleSubmit} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

ModifyProfile.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  setLoading: PropTypes.func.isRequired,
  loadUserProfile: PropTypes.func.isRequired,
  connectedUserData: PropTypes.arrayOf(
    PropTypes.shape(
      {
        firstname: PropTypes.string.isRequired,
        lastname: PropTypes.string.isRequired,
        helper: PropTypes.bool.isRequired,
        nickname: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        newPassword: PropTypes.string,
        confirmedNewPassword: PropTypes.string,
        cities: PropTypes.arrayOf(
          PropTypes.shape(
            {
              name: PropTypes.string.isRequired,
            },
          ).isRequired,
        ).isRequired,
      },
    ).isRequired,
  ).isRequired,
  changeField: PropTypes.func.isRequired,
  changePasswordField: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  hobbiesList: PropTypes.arrayOf(
    PropTypes.shape(
      {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      },
    ).isRequired,
  ).isRequired,
  loadHobbiesList: PropTypes.func.isRequired,
  servicesList: PropTypes.arrayOf(
    PropTypes.shape(
      {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      },
    ).isRequired,
  ).isRequired,
  loadServicesList: PropTypes.func.isRequired,
  modifyProfile: PropTypes.func.isRequired,
  isLoaded: PropTypes.bool.isRequired,
  redirection: PropTypes.bool.isRequired,
  isConnected: PropTypes.bool.isRequired,

  // isSearchBarVisible: PropTypes.bool.isRequired,
};

export default ModifyProfile;
