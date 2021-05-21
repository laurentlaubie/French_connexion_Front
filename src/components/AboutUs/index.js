import React from 'react';
import PropTypes from  'prop-types';

// == import local
import AboutUsReview from 'src/components/AboutUsReview';

import './aboutUs.scss';


const AboutUs = ({dataTeam}) => (
<div className="aboutUs">
  <div className="aboutUs__title" > A Propos de nous</div>
  <div className="aboutUs__global">
    <h2 className="aboutUs__title__subtitle" > Le Projet French Connection</h2>
    <div className="aboutUs__text">
    <p> Tout commence un soir de confinement lors d'un apéro visio !</p>
    <p>`On n'a qu'a partir en voyage en Colombie dès que le confinement est fini ? `</p>
    <p> `Euh, franchement ça craint la-bas non ? et y'a quoi à faire? on y connait personne en plus...` nous repondions tous</p>
    <p> De là, l'idée d'un site communautaire d'entraide entre voyageurs et residants est née <span className="site">- French Connection - </span></p>
    </div>
  </div>
  <h2 className="aboutUs__title__subtitle">L'Equipe</h2>
  
  <div className="aboutUs__list">
    {dataTeam.map((team) => (
      <AboutUsReview key={team.id} {...team} />
    ))}
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
