import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Field from 'src/components/Field';


// == import style
import './modifyProfile.scss';

const ModifyProfile = ({ connectedUserData, loadUserProfile, userInfos }) => {
  const userId = connectedUserData.id;

  useEffect(() => {
    loadUserProfile(userId);
  }, []);

  // console.log(dataHobbies);
  // console.log(dataServices);
  console.log(userInfos);

  return (
    <div className="modifyProfile">
      <h1 className="modifyProfile__title"> Modifier mon profil </h1>
      <form className="modifyProfile__form">

        <div className="modifyProfile__form modifyProfile__form--infos">
          <h2 className="modifyProfile__form__title"> Informations personnelles </h2>
          <label className="modifyProfile__form__label" htmlFor="nickname">
            <div className="modifyProfile__form__label__name"> Nom d'utilisateur </div>
            <Field
              name="nickname"
              placeholder="Ex: Martin88"
              onChange={changeField}
              value={nickname}
            />
            {/* <input className="modifyProfile__form__field" type="text" name="nickname" placeholder="Ex: Martin88" value={userInfos.nickname} onChange={/> */}
          </label>
          <label className="modifyProfile__form__label" htmlFor="email">
            <div className="modifyProfile__form__label__name"> Email </div>
            <input className="modifyProfile__form__field" type="email" name="email" placeholder="Email@exemple.com" value={userInfos.email} />
          </label>
          <label className="modifyProfile__form__label" htmlFor="firstname">
            <div className="modifyProfile__form__label__name"> Prénom </div>
            <input className="modifyProfile__form__field" type="text" name="firstname" placeholder="Ex: Martin" value={userInfos.firstname} />
          </label>
          <label className="modifyProfile__form__label" htmlFor="lastname">
            <div className="modifyProfile__form__label__name">Nom </div>
            <input className="modifyProfile__form__field" type="text" name="lastname" placeholder="Ex: Dupont" value={userInfos.lastname} />
          </label>
          <label className="modifyProfile__form__label" htmlFor="city">
            <div className="modifyProfile__form__label__name">Ville de résidence </div>
            <input className="modifyProfile__form__field" type="text" name="city" placeholder="Ex: Nancy, France" />
          </label>
          {/* <label className="modifyProfile__form__label" htmlFor="country">
            <input className="modifyProfile__form__infos__field" type="text" name="country" placeholder="Pays" />
          </label> */}
          <label className="modifyProfile__form__label" htmlFor="phoneNumber">
            <div className="modifyProfile__form__label__name">Numéro de téléphone </div>
            <input className="modifyProfile__form__field" type="number" name="phoneNumber" placeholder="06 34 34 34 34" />
          </label>

          <button className="modifyProfile__form__modifyPassword" type="button"> Modifier mon mot de passe </button>
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

      </form>

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
      },
    ).isRequired,
  ).isRequired,
};

export default ModifyProfile;
