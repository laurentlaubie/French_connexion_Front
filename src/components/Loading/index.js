import React from 'react';

import './loading.scss';

const Loading = () => (
  <div className="loader-wrapper">
    <div className="loader">
      <div className="roller" />
      <div className="roller" />
    </div>
    <div id="loader2" className="loader">
      <div className="roller" />
      <div className="roller" />
    </div>
    <div id="loader3" className="loader">
      <div className="roller" />
      <div className="roller" />
    </div>
  </div>
);

export default Loading;
