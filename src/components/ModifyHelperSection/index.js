/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import ModifyMyServices from 'src/containers/ModifyMyServices';

const ModifyHelperSection = ({ helper, toggleHelperCheckbox, isLoaded }) => {

  const handleChange = (evt) => {
    console.log(evt.target.value);
    // const checkboxState= evt.target.value;
    // if
    toggleHelperCheckbox(helper);
  };

  return (
    <div className="modifyProfile__form__section">
      <h2 className="modifyProfile__form__section__title"> Devenir helpeur </h2>
      <div className="modifyProfile__form__section__content">

        <div className="modifyProfile__form__subsection">
          <h3 className="modifyProfile__form__subsection__title"> Pourquoi devenir helpeur </h3>
          <div className="modifyProfile__form__text">
            fsdouif sduifh qsodifuh fuihqs fuih dfouihq sdfui hqsdfiouhqsd foiusdfh qsodiufh
          </div>
          <label htmlFor="helperCheckbox" className="helperCheckbox__label">
            <div className="helperCheckbox__label__name"> Je veux devenir helper et proposer mes services </div>
            <input name="helperCheckbox" type="checkbox" checked={helper} onChange={handleChange} />
          </label>
        </div>

        <div className="modifyProfile__form__subsection">
          {isLoaded && <ModifyMyServices />}
        </div>
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
