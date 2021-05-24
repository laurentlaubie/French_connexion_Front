import React from 'react';
import PropTypes from 'prop-types';
import illu from 'src/assets/images/illu.svg';

// == import local
import AboutUsReview from 'src/components/AboutUsReview';

import './aboutUs.scss';

const AboutUs = ({dataTeam}) => (
  <div className="aboutUs">
    <div className="aboutUs__title"> À Propos de nous</div>
    <div className="aboutUs__project">
      <img className="aboutUs__project__image" alt="Jeune fille qui rêve de voyager" src={illu} />
      <div className="aboutUs__project__content">
        <h2 className="aboutUs__project__title"> Le Projet French Connection</h2>
        <div className="aboutUs__project__text">
          <p> Tout commence un soir de confinement lors d'un apéro visio !</p>
          <p> « On n'a qu'à partir en voyage en Colombie dès que le confinement est fini ? » </p>
          <p> « Euh, franchement, moi je parle pas du tout espagnol. Et ça craint là-bas non ? On n'y connait personne en plus... » </p>
          <p> De là, l'idée d'un site communautaire d'entraide entre voyageurs et expatriés français est née. </p>
          <p> - French Connection - </p>
        </div>
      </div>
    </div>
    <div className="aboutUs__team">
      <h2 className="aboutUs__team__title">L'Equipe</h2>
      <div className="aboutUs__team__list">
        {dataTeam.map((team) => (
          <AboutUsReview key={team.id} {...team} />
        ))}
      </div>
    </div>
  </div>

);


AboutUs.propTypes = {
  dataTeam: PropTypes.arrayOf(
    PropTypes.shape(
      {
        id: PropTypes.number.isRequired,
      },
    ),
  ).isRequired,
};


export default AboutUs;
