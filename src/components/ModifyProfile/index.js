/* eslint-disable no-console */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Field from 'src/components/Field';
import TextArea from 'src/components/TextArea';
import ModifyCity from 'src/containers/ModifyCity';
import Loading from 'src/components/Loading';
import ModifyMyHobbies from 'src/containers/ModifyMyHobbies';
import ModifyMyServices from 'src/containers/ModifyMyServices';
import ProfilePrincipalInfos from 'src/components/ProfilePrincipalInfos';

// == Import style
import './modifyProfile.scss';

const ModifyProfile = ({
  connectedUserData,
  changeField,
  handleModifyProfile,
  openModal,
  userAddress,
  isLoaded,
  loadHobbiesList,
  loadServicesList,
  // newPassword,
  // confirmedNewPassword,

}) => {
  const userId = connectedUserData.id;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('je souhaite envoyer mon formulaire');
    let myHobbiesList = [];
    connectedUserData.hobbies.map((hobby) => {
      myHobbiesList = [...myHobbiesList, hobby.id];
    });
    console.log(myHobbiesList);
    handleModifyProfile(userId, myHobbiesList);
  };

  useEffect(() => {
    loadHobbiesList();
    loadServicesList();
  }, []);


  return (
    <div className="modifyProfile">
      <h1 className="modifyProfile__title"> Modifier mon profil </h1>
      <div className="modifyProfile__content">
        <div className="modifyProfile__principalInfos">
          <ProfilePrincipalInfos {...connectedUserData} isMyProfile />
        </div>
        <form className="modifyProfile__form" onSubmit={handleSubmit}>

          {/* <div className="modifyProfile__form__navbar">
            <div className="modifyProfile__form__navbar__item" onClick={displaySection}> Informations personnelles </div>
            <div className="modifyProfile__form__navbar__item" onClick={displaySection}> A propos de moi </div>
            <div className="modifyProfile__form__navbar__item" onClick={displaySection}> Devenir helper </div>
          </div> */}

          <div className="modifyProfile__form__section">
            <div className="modifyProfile__form__section__title modifyProfile__form__section__title"> Informations personnelles </div>
            <div className="modifyProfile__form__section__content">
              <div className="modifyProfile__form__section__fieldGroup">
                <div className="modifyProfile__form__label">
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
                <div className="modifyProfile__form__label__name"> Email </div>
                <Field
                  className="modifyProfile__form__field"
                  name="username"
                  placeholder="Email@exemple.com"
                  onChange={changeField}
                  value={connectedUserData.username}
                  type="email"
                />
              </div>
              <div className="modifyProfile__form__section__fieldGroup">
                <div className="modifyProfile__form__label" htmlFor="password">
                  <div className="modifyProfile__form__label__name"> Mot de passe </div>
                  <Field
                    className="modifyProfile__form__field"
                    name="newPassword"
                    placeholder="Nouveau mot de passe"
                    onChange={changeField}
                    value={connectedUserData.newPassword}
                    type="password"
                  />
                </div>
                <div className="modifyProfile__form__label" htmlFor="password">
                  <div className="modifyProfile__form__label__name"> Confirmer le mot de passe </div>
                  <Field
                    className="modifyProfile__form__field"
                    name="confirmedNewPassword"
                    placeholder="Confirmez votre mot de passe"
                    onChange={changeField}
                    value={connectedUserData.confirmedNewPassword}
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
              <div className="modifyProfile__form__label">
                <div className="modifyProfile__form__city">
                  {connectedUserData.cities != null && userAddress === '' ? `Votre ville de résidence est ${connectedUserData.cities.name}, ${connectedUserData.countries.frenchName}.` : ''}
                  {/* {userAddress !== '' ? `Votre ville de résidence est ${userAddress[0]}, ${userAddress[1]}.` : ''}
                  {userAddress === '' && userInfos.cities === null ? 'Vous n\'avez pas renseigné votre ville de résidence.' : ''} */}
                </div>
                <button className="modifyProfile__form__city__button" type="button" onClick={openModal}> Chercher une ville </button>
                <ModifyCity />
              </div>

            </div>
          <button type="submit"> Enregistrez vos modifications </button>

          <div className="modifyProfile__form__section">
            <div className="modifyProfile__form__section__title"> A propos de moi </div>
            <div className="modifyProfile__form__section__content">

              <div className="modifyProfile__form__label" htmlFor="biography">
                <div className="modifyProfile__form__label__name"> Je raconte ma life sur Internet </div>
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
            {isLoaded && <ModifyMyServices />}
            <div className="modifyProfile__form__section modifyProfile__form__section">
              <div className="modifyProfile__form__section__title"> Je deviens helpeur </div>
              <div className="modifyProfile__form__section__content">
                blablabla services
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
  );
};

ModifyProfile.propTypes = {
  // dataHobbies : PropTypes.arrayOf(
  //   PropTypes.shape({
  //     hobby : PropTypes.string.isRequired,
  //     id : PropTypes.number.isRequired,
  //   }),
  // ).isRequired,
  // dataServices : PropTypes.arrayOf(
  //   PropTypes.shape({
  //     service : PropTypes.string.isRequired,
  //     id : PropTypes.number.isRequired,
  //   }),
  // ).isRequired,
  isLoading: PropTypes.bool.isRequired,
  setLoading: PropTypes.func.isRequired,
  connectedUserData: PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
    },
  ).isRequired,
  loadUserProfile: PropTypes.func.isRequired,
  userInfos: PropTypes.arrayOf(
    PropTypes.shape(
      {
        helper: PropTypes.bool.isRequired,
        nickname: PropTypes.string.isRequired,
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
  nickname: PropTypes.string.isRequired,
  newPassword: PropTypes.string.isRequired,
  confirmedNewPassword: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
  
  hobbiesList: PropTypes.arrayOf(
    PropTypes.shape(
      {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      },
    ).isRequired,
  ).isRequired,
  // isSearchBarVisible: PropTypes.bool.isRequired,

};

export default ModifyProfile;
