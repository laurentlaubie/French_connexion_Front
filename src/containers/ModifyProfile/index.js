import { connect } from 'react-redux';
import {
  loadUserProfile,
  changeProfileFormFieldValue,
  changePasswordProfileFormFieldValue,
  modifyProfile,
  openModifyCityModal,
  setLoading,
} from 'src/actions/user';

import { loadHobbiesList } from 'src/actions/hobbies';
import { loadServicesList } from 'src/actions/services';

import ModifyProfile from 'src/components/ModifyProfile';

// connection de props en lecture sur le state
// ces props seront des tableaux, objets, booléens, numériques, string
const mapStateToProps = (state, ownProps) => ({
  userInfos: state.user.userInfos,
  connectedUserData: state.log.connectedUserData,
  newPassword: state.user.newPassword,
  confirmedNewPassword: state.user.confirmedNewPassword,
  userAddress: state.user.userAddress,
  hobbiesList: state.hobbies.hobbiesList,
  servicesList: state.services.servicesList,
  isLoading: state.user.isLoading,

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
  changePasswordField: (value, name) => {
    dispatch(changePasswordProfileFormFieldValue(value, name));
  },
  handleModifyProfile: (userId) => {
    dispatch(modifyProfile(userId));
  },
  openModal: () => {
    dispatch(openModifyCityModal());
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

});

export default connect(mapStateToProps, mapDispatchToProps)(ModifyProfile);
