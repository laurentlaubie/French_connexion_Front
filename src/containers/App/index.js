import { connect } from 'react-redux';

import { loadConnectedUserData, setIsConnected, saveTokenInState } from 'src/actions/log';

import { loadHobbiesList } from 'src/actions/hobbies';

import { loadServicesList } from 'src/actions/services';

import { setLoading } from 'src/actions/user';

import App from 'src/components/App';

// connection de props en lecture sur le state
// ces props seront des tableaux, objets, booléens, numériques, string
const mapStateToProps = (state, ownProps) => ({
  isConnected: state.log.isConnected,
  isLoading: state.log.isLoading,
  tokenFromState: state.log.token,
});

// connection de props fonctions qui déclenchent des actions
// ces props seraont des fonctions
const mapDispatchToProps = (dispatch, ownProps) => ({
  loadConnectedUserData: (id) => {
    dispatch(loadConnectedUserData(id));
  },
  loadHobbiesList: () => {
    dispatch(loadHobbiesList());
  },
  loadServicesList: () => {
    dispatch(loadServicesList());
  },
  setLoading: (value) => {
    dispatch(setLoading(value));
  },
  setIsConnected: (value) => {
    dispatch(setIsConnected(value));
  },
  saveTokenInState: (value) => {
    dispatch(saveTokenInState(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
