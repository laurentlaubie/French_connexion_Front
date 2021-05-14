import { connect } from 'react-redux';

import MapProfile from 'src/components/MapProfile';

 
// connection de props en lecture sur le state
// ces props seront des tableaux, objets, booléens, numériques, string
const mapStateToProps = (state, ownProps) => ({
  center: state.map.center,
 
});

// connection de props fonctions qui déclenchent des actions
// ces props seraont des fonctions
const mapDispatchToProps = (dispatch, ownProps) => ({
 
});

export default connect(mapStateToProps, mapDispatchToProps)(MapProfile);
