import React from 'react';

// == import style 
import './modifyButton.scss';

import editbutton from 'src/assets/pictures/editbutton.png';


const ModifyButton = () => (

  // ----- Modify Button -----

    <div className="editbutton"> <img className="button" src={editbutton} /> </div>
       
);

export default ModifyButton;
