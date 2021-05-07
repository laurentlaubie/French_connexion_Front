import React from 'react';
import PropTypes from 'prop-types';

// == import style
import './modifyProfile.scss';


const ModifyProfile = ({dataHobbies, dataServices }) => {

  // ----- modify my profil page -----

  console.log(dataHobbies);
  console.log(dataServices);

  return(
  <div className="modifymyprofile">
    <div className="modifymyprofil__all">
      <h2 className="modifymyprofile__all__title">Modifier mon profil </h2>
        <form className="modifyprofile__form">
        <input className="modifymyprofile__form__field" type="pseudo" name="pseudo" placeholder="pseudo"/>
        <input className="modifymyprofile__form__field" type="email" name="email" placeholder="email"/>
        <input className="modifymyprofile__form__field" type="firstname" name="firstname" placeholder="Prénom"/>
        <input className="modifymyprofile__form__field" type="lastname" name="lastname" placeholder="Nom" />
        <input className="modifymyprofile__form__field" type="city" name="city" placeholder="Ville"/>
        <input className="modifymyprofile__form__field" type="Country" name="Country" placeholder="Pays"/>
        
        <input className="modifymyprofile__form__field" type="Phone" name="Phone" placeholder="Téléphone"/>
        
        <button className="modifymyprofile__form__password" type="submit"> Modifier mon mot de passe </button>    
     
      <div className="modifymyprofile__all__services">
        <h3 className="modifymyprofile__all__title">Mes centres d'interet</h3> 
          <input className="modifymyprofile__form__input" type="checkbox" id="" name="hobby" />
          <label className="modifymyprofile__form__label" for="hobby">Rugby</label>
          <input className="modifymyprofile__form__input" type="checkbox" id="" name="hobby" />
          <label className="modifymyprofile__form__label" for="hobby">test</label>
          <input className="modifymyprofile__form__input" type="checkbox" id="" name="hobby" />
          <label className="modifymyprofile__form__label" for="hobby">test</label>
          <input className="modifymyprofile__form__input" type="checkbox" id="" name="hobby" />
          <label className="modifymyprofile__form__label" for="hobby">test</label>
      </div>
    
      <div className="profile__services">
      <h3 className="modifymyprofile__all__title">Mes services</h3>  
          <input className="modifymyprofile__form__input" type="checkbox" id="service" name="service" />
          <label className="modifymyprofile__form__label" for="service">Hebergement</label>
          <input className="modifymyprofile__form__input" type="checkbox" id="service" name="service" />
          <label className="modifymyprofile__form__label" for="service">test</label>
          <input className="modifymyprofile__form__input" type="checkbox" id="service" name="service" />
          <label className="modifymyprofile__form__label" for="service">test</label>
          <input className="modifymyprofile__form__input" type="checkbox" id="service" name="service" />
          <label className="modifymyprofile__form__label" for="service">test</label>
      </div>
        </form>

      </div>
    </div>
  )
};

ModifyProfile.propTypes = {
  dataHobbies : PropTypes.arrayOf(
    PropTypes.shape({
      hobby : PropTypes.string.isRequired,
      id : PropTypes.number.isRequired,
    }),
  ).isRequired,
  dataServices : PropTypes.arrayOf(
    PropTypes.shape({
      service : PropTypes.string.isRequired,
      id : PropTypes.number.isRequired,
    }),
  ).isRequired,
}



export default ModifyProfile;
