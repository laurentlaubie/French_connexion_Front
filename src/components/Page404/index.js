import React from 'react';

// == import Style
import './page404.scss';
import page404 from 'src/assets/images/page404.jpg';

const Page404 = () => (
  <div className="page404">
    <div className="page404__image">
      <img className="page404__image__flat" src={page404} alt="page 404 avec montagne et voyageuse" />
    </div>
  </div>
);

export default Page404;
