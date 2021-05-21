import React from 'react';

import PropTypes from 'prop-types';

import './aboutUsReview.scss';

const AboutUsReview = ({ avatar, name, role, description }) => (
  <div className="aboutUsreview">
    
    <div className="aboutUsreview__picture">
    <img  src={avatar} alt={`Avatar de ${name}`} />
    </div>

    <div className="aboutUsreview__card">
        <div className="aboutUsreview__card__name">{name}</div>
        <div className="aboutUsreview__card__role"> {role}</div> 
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
