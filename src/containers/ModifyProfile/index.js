import { connect } from 'react-redux';
import { loadUserProfile, changeProfileFormFieldValue } from 'src/actions/user';

import ModifyProfile from 'src/components/ModifyProfile';

// connection de props en lecture sur le state
// ces props seront des tableaux, objets, booléens, numériques, string
const mapStateToProps = (state, ownProps) => ({
  userInfos: state.user.userInfos,
  connectedUserData: state.log.connectedUserData,
});

// connection de props fonctions qui déclenchent des actions
// ces props seraont des fonctions
const mapDispatchToProps = (dispatch, ownProps) => ({
  loadUserProfile: (userId) => {
    dispatch(loadUserProfile(userId));
  },
  changeField: (value, name) => {
    dispatch(changeProfileFormFieldValue(value, name));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ModifyProfile);
