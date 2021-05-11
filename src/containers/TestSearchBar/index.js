import { connect } from 'react-redux';

import TestSearchBar from 'src/components/TestSearchBar';
import { setSelected, setNewMarker, setNewAdress, setNewCenter } from 'src/actions';
 
// connection de props en lecture sur le state
// ces props seront des tableaux, objets, booléens, numériques, string
const mapStateToProps = (state, ownProps) => ({
  Tadress: state.adress,
  Tcoordinates: state.coordinates,
});

// connection de props fonctions qui déclenchent des actions
// ces props seraont des fonctions
const mapDispatchToProps = (dispatch, ownProps) => ({
  TsetAdress: (adress) => {
    dispatch(setNewAdress(adress));
  },
  // center doit etre un objet composé de lat et lng
  TsetCenter: (center) => {
    dispatch(setNewCenter(center));
  },
 
});

export default connect(mapStateToProps, mapDispatchToProps)(TestSearchBar);
