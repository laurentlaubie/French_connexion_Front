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
        {dataHobbies.map((Hobby) => {
          <React.Fragment key={Hobby.id}>
          <input className="modifymyprofile__form__input" type="checkbox" id={Hobby.id} name={Hobby.hobby} />
          <label className="modifymyprofile__form__label" for={Hobby.id} >{Hobby.hobby}</label>
          </React.Fragment>
        })}
      
      </div>
    
      <div className="profile__services">
      <h3 className="modifymyprofile__all__title">Mes services</h3>  
      {dataServices.map((Service) => {
         <React.Fragment key={Service.id}>
          <input className="modifymyprofile__form__input" type="checkbox" id={Service.id} name={Service.service} />
          <label className="modifymyprofile__form__label" for={Service.id} >{Service.service}</label>
          </React.Fragment>
        })}
          
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
