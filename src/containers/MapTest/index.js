import { connect } from 'react-redux';

import MapTest from 'src/components/MapTest';
import { setSelected } from 'src/actions';
 
// connection de props en lecture sur le state
// ces props seront des tableaux, objets, booléens, numériques, string
const mapStateToProps = (state, ownProps) => ({
  center: state.center,
  markers: state.markers,
  markerSelected: state.markerSelectedmarkerSelected,
});

// connection de props fonctions qui déclenchent des actions
// ces props seraont des fonctions
const mapDispatchToProps = (dispatch, ownProps) => ({
  handleSelected: (marker) => {
    dispatch(setSelected(marker));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MapTest);
