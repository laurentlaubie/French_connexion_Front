import React from 'react';

// == import style
import './modifyProfile.scss';


const ModifyProfile = () => (

  // ----- modify my profil page -----

  <div className="modifyprofile">
    <h2 className="modifyprofile__title">Modifier mon profil </h2>
      <div className="modifyprofile__allinfos">
        <form className="modifyprofile__form">
        <input className="modifyprofile__form__field" type="pseudo" name="pseudo" placeholder="Pseudo" />
        <input className="modifyprofile__form__field" type="email" name="email" placeholder="Adresse Mail" />
        <input className="modifyprofile__form__field" type="firstname" name="firstname" placeholder="Nom" />
        <input className="modifyprofile__form__field" type="lastname" name="lastname" placeholder="Prénom" />
        <input className="modifyprofile__form__field" type="city" name="city" placeholder="Ville" />
        <input className="modifyprofile__form__field" type="Country" name="Country" placeholder="Pays" />
        <input className="modifyprofile__form__field" type="Phone" name="CountPhonery" placeholder="Téléphone" />
        </form>

        <button className="modifyprofile__mp" type="submit"> Modifier mon mot de passe </button>
        
        <div className="profile__interest">
          <p>bieres</p>
        </div>
        <div className="profile__services">
          <p>soirée de fou</p>
        </div>
      </div>
  </div>
);



export default ModifyProfile;
