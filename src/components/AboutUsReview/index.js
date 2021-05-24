import React from 'react';

import PropTypes from 'prop-types';

import './aboutUsReview.scss';

const AboutUsReview = ({ name, role }) => (
  <div className="aboutUsReview">
    <div className={`aboutUsReview__picture aboutUsReview__picture--${name}`} />
    <div className="aboutUsReview__card">
      <div className="aboutUsReview__card__name">{name}</div>
      <div className="aboutUsReview__card__role"> {role}</div>
    </div>
  </div>
);

AboutUsReview.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};

export default AboutUsReview;
