import { connect } from 'react-redux';

import TestSearchBar from 'src/components/TestSearchBar';
import {setNewAdress, setNewCenter } from 'src/actions';
 
// connection de props en lecture sur le state
// ces props seront des tableaux, objets, booléens, numériques, string
const mapStateToProps = (state, ownProps) => ({
  adress: state.adress,

});

// connection de props fonctions qui déclenchent des actions
// ces props seraont des fonctions
const mapDispatchToProps = (dispatch, ownProps) => ({
  setAdress: (adress) => {
    dispatch(setNewAdress(adress));
  },
  // center doit etre un objet composé de lat et lng
  setCenter: (center) => {
    dispatch(setNewCenter(center));
  },
 
});

export default connect(mapStateToProps, mapDispatchToProps)(TestSearchBar);
