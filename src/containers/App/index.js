import { connect } from 'react-redux';

import { saveConnectedUserData } from 'src/actions/log';

import App from 'src/components/App';

// connection de props en lecture sur le state
// ces props seront des tableaux, objets, booléens, numériques, string
const mapStateToProps = (state, ownProps) => ({
  isConnected: state.log.isConnected,
});

// connection de props fonctions qui déclenchent des actions
// ces props seraont des fonctions
const mapDispatchToProps = (dispatch, ownProps) => ({
  saveConnectedUserData: (decodedToken) => {
    dispatch(saveConnectedUserData(decodedToken));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
