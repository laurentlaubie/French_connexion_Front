import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Field from 'src/components/Field';
import ProfilePrincipalInfos from 'src/components/ProfilePrincipalInfos';


// == import style
import './modifyProfile.scss';

const ModifyProfile = ({
  connectedUserData, loadUserProfile, userInfos, changeField, newPassword, confirmedNewPassword
}) => {
  const userId = connectedUserData.id;

  console.log(userInfos);
  useEffect(() => {
    loadUserProfile(userId);
  }, []);

  // console.log(dataHobbies);
  // console.log(dataServices);
  console.log(userInfos);

  return (
    <div className="modifyProfile">
      <h1 className="modifyProfile__title"> Modifier mon profil </h1>
      <div className="modifyProfile__content">
        <div className="modifyProfile__principalInfos">
          <ProfilePrincipalInfos {...userInfos} isMyProfile />
        </div>
        <form className="modifyProfile__form">
          <div className="modifyProfile__form__section">
            <div className="modifyProfile__form__section__title"> Informations personnelles </div>
            <div className="modifyProfile__form__section__content">
              <div className="modifyProfile__form__section__fieldGroup">
                <label className="modifyProfile__form__label" htmlFor="firstname">
                  <div className="modifyProfile__form__label__name"> Prénom </div>
                  <Field
                    className="modifyProfile__form__field"
                    name="firstname"
                    placeholder="Ex: Martin"
                    onChange={changeField}
                    value={userInfos.firstname}
                  />
                </label>
                <label className="modifyProfile__form__label" htmlFor="lastname">
                  <div className="modifyProfile__form__label__name">Nom </div>
                  <Field
                    className="modifyProfile__form__field"
                    name="lastname"
                    placeholder="Ex: Dupont"
                    onChange={changeField}
                    value={userInfos.lastname}
                  />
                </label>
              </div>
              <label className="modifyProfile__form__label" htmlFor="nickname">
                <div className="modifyProfile__form__label__name"> Nom d'utilisateur </div>
                <Field
                  className="modifyProfile__form__field"
                  name="nickname"
                  placeholder="Ex: Martin88"
                  onChange={changeField}
                  value={userInfos.nickname}
                />
              </label>
              <label className="modifyProfile__form__label" htmlFor="email">
                <div className="modifyProfile__form__label__name"> Email </div>
                <Field
                  className="modifyProfile__form__field"
                  name="email"
                  placeholder="Email@exemple.com"
                  onChange={changeField}
                  value={userInfos.email}
                  type="email"
                />
              </label>
              <div className="modifyProfile__form__section__fieldGroup">
                <label className="modifyProfile__form__label" htmlFor="password">
                  <div className="modifyProfile__form__label__name"> Mot de passe </div>
                  <Field
                    className="modifyProfile__form__field"
                    name="password"
                    placeholder="Nouveau mot de passe"
                    onChange={changeField}
                    value={newPassword}
                    type="password"
                  />
                </label>
                <label className="modifyProfile__form__label" htmlFor="password">
                  <div className="modifyProfile__form__label__name"> Confirmer votre mot de passe </div>
                  <Field
                    className="modifyProfile__form__field"
                    name="confirmedPassword"
                    placeholder="Confirmez votre mot de passe"
                    onChange={changeField}
                    value={confirmedNewPassword}
                    type="password"
                  />
                </label>
              </div>

              
              {/* <label className="modifyProfile__form__label" htmlFor="city">
                <div className="modifyProfile__form__label__name">Ville de résidence </div>
                <Field
                  name="city"
                  placeholder="Ex: Nancy"
                  onChange={changeField}
                  value={userInfos.cities}
                />
              </label> */}
              {/* <label className="modifyProfile__form__label" htmlFor="country">
              </label> */}
              <label className="modifyProfile__form__label" htmlFor="phoneNumber">
                <div className="modifyProfile__form__label__name">Numéro de téléphone </div>
                <Field
                  className="modifyProfile__form__field"
                  name="phoneNumber"
                  placeholder="Ex: 06 34 34 34 34"
                  onChange={changeField}
                  value={userInfos.phoneNumber}
                />
              </label>

            </div>
          </div>

          <div className="modifyProfile__form__section odifyProfile__form__section--active">
            <div className="modifyProfile__form__section__title"> A propos de moi </div>
            <div className="modifyProfile__form__section__content">

              <label className="modifyProfile__form__label" htmlFor="biography">
                <div className="modifyProfile__form__label__name"> Je raconte ma life sur Internet </div>
                <Field
                  className="modifyProfile__form__field"
                  name="biography"
                  placeholder="Ecrivez-ici un petit texte de présentation, pour que nos utilisateurs apprennent à vous connaitre"
                  onChange={changeField}
                  value={userInfos.biography}
                  type="text-area"
                />
              </label>
            </div>
          </div>

          <div className="modifyProfile__form__section modifyProfile__form__section">
            <div className="modifyProfile__form__section__title"> Je deviens helpeur </div>
            <div className="modifyProfile__form__section__content">
              blablabla services
            </div>
          </div>

          {/* <div className="modifyProfile__form__hobbies">
            <h2 className="modifyProfile__form__hobbies__title">Mes centres d'interet</h2>
            {dataHobbies.map((Hobby) => {
              <React.Fragment key={Hobby.id}>
                <input className="modifyProfile__form__input" type="checkbox" id={Hobby.id} name={Hobby.hobby} />
                <label className="modifyProfile__form__label" for={Hobby.id} >{Hobby.hobby}</label>
              </React.Fragment>
            })}
          </div>

          <div className="modifyProfile__form__services">
            <h2 className="modifymyprofile__all__title"> Mes services </h2>
            {dataServices.map((Service) => {
              <React.Fragment key={Service.id}>
                <input className="modifymyprofile__form__input" type="checkbox" id={Service.id} name={Service.service} />
                <label className="modifymyprofile__form__label" for={Service.id} >{Service.service}</label>
              </React.Fragment>
            })}
          </div> */}
          <button type="submit"> Enregistrez vos modifications </button>
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
      },
    ).isRequired,
  ).isRequired,
  changeField: PropTypes.func.isRequired,
  nickname: PropTypes.string.isRequired,
  newPassword: PropTypes.string.isRequired,
  confirmedNewPassword: PropTypes.string.isRequired,

};

export default ModifyProfile;
