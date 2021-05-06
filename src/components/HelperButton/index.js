import React from 'react';

// == import style 
import './helperButton.scss';

import hands from 'src/assets/images/hands.png';


const HelperButton = () => (

  // ----- helper Button -----
  <div className="helper">
    <div className="helper__title">Devenir Helper</div>
    <div className="helper__button"> <img className="helperimg" src={hands} /> </div>
  </div> 
);

export default HelperButton;
