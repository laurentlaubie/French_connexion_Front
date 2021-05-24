/* eslint-disable max-len */
/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import ModifyMyServices from 'src/containers/ModifyMyServices';

const ModifyHelperSection = ({
  helper,
  isLoaded,
  becomeHelper,
  removeHelperStatus,
}) => (
  <div className="modifyProfile__form__section">
    <h2 className="modifyProfile__form__section__title"> {helper ? 'Votre statut helper' : 'Devenir helper'} </h2>
    <div className="modifyProfile__form__section__content">

      <div className={helper ? 'hidden' : 'modifyProfile__form__subsection'}>
        <h3 className="modifyProfile__form__subsection__title"> Pourquoi devenir helper </h3>
        <div className="modifyProfile__form__text">
          <p> Si êtes francophone et habitez hors de France, vous pouvez devenir helper </p>
          <p> Devenir helper permet de proposer aux autres utilisateurs votre aide lors de leur voyage dans votre ville. Vous pouvez proposer plusieurs services.</p>
        </div>
        <button type="button" className="modifyProfile__form__becomeHelperButton" onClick={becomeHelper}> Je veux devenir helper et proposer mes services </button>
      </div>

      <div className={helper ? 'modifyProfile__form__subsection' : 'hidden'}>
        <div className="modifyProfile__form__text">
          <p> Vous êtes helper !</p>
          <p> Votre statut de helper vous permet de proposer divers services aux voyageurs. Vous pouvez ajouter ou retirer des services ci-dessous, ceux-ci seront visibles par les autres utilisateurs sur votre profil. </p>
        </div>
      </div>
      <div className="modifyProfile__form__subsection">
        {isLoaded && <ModifyMyServices />}
      </div>
      <button type="button" className={helper ? 'modifyProfile__form__resetHelperButton' : 'hidden'} onClick={removeHelperStatus}> Je ne souhaite plus être helper </button>
    </div>
  </div>
);

ModifyHelperSection.propTypes = {
  helper: PropTypes.bool.isRequired,
  isLoaded: PropTypes.bool.isRequired,
  becomeHelper: PropTypes.func.isRequired,
  removeHelperStatus: PropTypes.func.isRequired,

};

export default ModifyHelperSection;
