import React from 'react';
import PropTypes from  'prop-types';

// == import local
import AboutUsReview from 'src/components/AboutUsReview';

import './aboutUs.scss';


const AboutUs = ({dataTeam}) => (
<div className="aboutUs">
  <h1 className="aboutUs__title" > A Propos de nous</h1>
  <h2 className="aboutUs__title__subtitle" > Le Projet French Connection</h2>
  <div className="aboutUs__text">
  <p> Tout commence un soir de confinement lors d'un apéro visio !</p>
  <p>"On n'a qu'a partir en voyage en Colombie des que le confinement est fini ? " pose soudainement la question Nicolas.</p>
  <p> Euh, franchement ça craint labas non ? et ya quoi a faire, on y connait personne en plus...nous repondions tous</p>
  <p> De la, l'idée d'un site communautaire d'entraide entre voyageurs et residants est née <span className="site">- French Connection - </span></p>
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
