/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import ModifyMyServices from 'src/containers/ModifyMyServices';

const ModifyHelperSection = ({ helper, toggleHelperCheckbox, isLoaded, becomeHelper, removeHelperStatus }) => {

  const handleChange = (evt) => {
    console.log(evt.target.value);
    // const checkboxState= evt.target.value;
    // if
    toggleHelperCheckbox(helper);
  };

  return (
    <div className="modifyProfile__form__section">
      <h2 className="modifyProfile__form__section__title"> {helper ? 'Votre statut helpeur' : 'Devenir helpeur'} </h2>
      <div className="modifyProfile__form__section__content">

        <div className={helper ? 'hidden' : 'modifyProfile__form__subsection'}>
          <h3 className="modifyProfile__form__subsection__title"> Pourquoi devenir helpeur </h3>
          <div className="modifyProfile__form__text">
            fsdouif sduifh qsodifuh fuihqs fuih dfouihq sdfui hqsdfiouhqsd foiusdfh qsodiufh
          </div>
          <button type="button" className="modifyProfile__form__becomeHelperButton" onClick={becomeHelper}> Je veux devenir helper et proposer mes services </button>
        </div>

        <div className={helper ? 'modifyProfile__form__subsection' : 'hidden'}>
          <div className="modifyProfile__form__text">
            Vos statut de helper vous permet de proposer divers services aux voyageurs. Vous pouvez ajouter ou retirer des services ci-dessous, ceux-ci seront visibles par les autres utilisateurs sur votre profil.
          </div>
        </div>

        <div className="modifyProfile__form__subsection">
          {isLoaded && <ModifyMyServices />}
        </div>

        <button type="button" className={helper ? 'modifyProfile__form__resetHelperButton' : 'hidden'} onClick={removeHelperStatus}> Je ne souhaite plus être helper </button>
        
      </div>
    </div>
  );
};

ModifyHelperSection.propTypes = {
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

export default ModifyHelperSection;
