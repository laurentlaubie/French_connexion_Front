import React from 'react';
import PropTypes from  'prop-types';

// == import local
import AboutUsReview from 'src/components/AboutUsReview';

import './aboutUs.scss';


const AboutUs = ({dataTeam}) => (
<div className="aboutUs">
  <h1 className="aboutUs__title" > A Propos de nous</h1>
  <h2 className="aboutUs__title__subtitle" > Le Projet French Connection</h2>
  <div className="aboutUs__text">Vide, quantum, inquam, fallare, Torquate. oratio me istius philosophi non offendit; nam et complectitur verbis, quod vult, et dicit plane, quod intellegam; et tamen ego a philosopho, si afferat eloquentiam, non asperner, si non habeat, 
  non admodum flagitem. re mihi non aeque satisfacit, et quidem locis pluribus. sed quot homines, tot sententiae; falli igitur possumus.
  Vide, quantum, inquam, fallare, Torquate. oratio me istius philosophi non offendit; nam et complectitur verbis, quod vult, et dicit plane, quod intellegam; et tamen ego a philosopho, si afferat eloquentiam, non asperner, si non habeat, 
  non admodum flagitem. re mihi non aeque satisfacit, et quidem locis pluribus. sed quot homines, tot sententiae; falli igitur possumus.Vide, quantum, inquam, fallare, Torquate. oratio me istius philosophi non offendit; nam et complectitur verbis, quod vult, et dicit plane, quod intellegam; et tamen ego a philosopho, si afferat eloquentiam, non asperner, si non habeat, 
  non admodum flagitem. re mihi non aeque satisfacit, et quidem locis pluribus. sed quot homines, tot sententiae; falli igitur possumus.</div>
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
