import React from 'react';

import PropTypes from 'prop-types';

import './aboutUsReview.scss';

const AboutUsReview = ({ avatar, name, role, description }) => (
  <div className="aboutUsreview">
    <img className="aboutUsreview__image" src={avatar} alt={`Avatar de ${name}`} />
    <div className="aboutUsreview__text">
      <p className="aboutUsreview__text__name">{name}</p>
      <p className="aboutUsreview__text__role"> {role}</p>
      <p className="aboutUsreview__text__description"> {description}</p>

    </div>
  </div>
);

AboutUsReview.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  // comment: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default AboutUsReview;
