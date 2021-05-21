import { connect } from 'react-redux';

import MapTest from 'src/components/MapTest';
import { setSelected, setNewMarker } from 'src/actions/map';
 
// connection de props en lecture sur le state
// ces props seront des tableaux, objets, booléens, numériques, string
const mapStateToProps = (state, ownProps) => ({
  center: state.map.center,
  markers: state.map.markers,
  markerSelected: state.map.markerSelected,

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

export default connect(mapStateToProps, mapDispatchToProps)(MapTest);
