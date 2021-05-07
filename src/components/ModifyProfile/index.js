import React from 'react';

// == import style
import './modifyProfile.scss';


const ModifyProfile = ({dataHobbies, dataServices }) => {

  // ----- modify my profil page -----

  console.log(dataHobbies);
  console.log(dataServices);

  return(
  <div className="modifyprofile">
    <h2 className="modifyprofile__title">Modifier mon profil </h2>
      <div className="modifyprofile__allinfos">

        <form className="modifyprofile__form">
          <label for="Pseudo"> Pseudo</label>
            <input className="modifyprofile__form__field" type="pseudo" name="pseudo" placeholder="Pseudo" />
            <input className="modifyprofile__form__field" type="email" name="email" placeholder="Adresse Mail" />
            <input className="modifyprofile__form__field" type="firstname" name="firstname" placeholder="Nom" />
            <input className="modifyprofile__form__field" type="lastname" name="lastname" placeholder="Prénom" />
            <input className="modifyprofile__form__field" type="city" name="city" placeholder="Ville" />
            <input className="modifyprofile__form__field" type="Country" name="Country" placeholder="Pays" />
            <input className="modifyprofile__form__field" type="Phone" name="CountPhonery" placeholder="Téléphone" />
        </form>

          <button className="modifyprofile__mp" type="submit"> Modifier mon mot de passe </button>    
      </div>
      <div className="profile__services">
          <input type="checkbox" id="hobby" name="hobby" />
          <label for="hobby">test</label>
      </div>
      
          
        <div className="profile__services">
          <p>soirée de fou</p>
        </div>
  </div>
  
  )
};



export default ModifyProfile;
