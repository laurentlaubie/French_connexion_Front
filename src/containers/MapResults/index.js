import { connect } from 'react-redux';

import MapResults from 'src/components/MapResults';
import { setSelected, setNewMarker } from 'src/actions';
 
// connection de props en lecture sur le state
// ces props seront des tableaux, objets, booléens, numériques, string
const mapStateToProps = (state, ownProps) => ({
  center: state.center,
  markers: state.markers,
  markerSelected: state.markerSelected,
  localisation: state.localisation,

});

// connection de props fonctions qui déclenchent des actions
// ces props seraont des fonctions
const mapDispatchToProps = (dispatch, ownProps) => ({
  handleSelected: (marker) => {
    dispatch(setSelected(marker));
  },
  // AddNewMarker(e)
  setMarker: (marker) => {
    dispatch(setNewMarker(marker));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MapResults);
