import { connect } from 'react-redux';

import ModifyCity from 'src/components/ModifyCity';
import { closeModifyCityModal, saveUserAddress } from 'src/actions/user';
import { setNewAdress } from 'src/actions/map';
// connection de props en lecture sur le state
// ces props seront des tableaux, objets, booléens, numériques, string
const mapStateToProps = (state, ownProps) => ({
  isOpen: state.user.isModifyCityModalOpen,
  // userAddress: state.user.userAdress,
  address: state.user.address,
  userAddress: state.user.userAddress,

});

// connection de props fonctions qui déclenchent des actions
// ces props seraont des fonctions
const mapDispatchToProps = (dispatch, ownProps) => ({
  close: () => {
    dispatch(closeModifyCityModal());
  },
  setAddress: (adress) => {
    dispatch(setNewAdress(adress));
  },
  saveUserAddress: (cityName, countryName, lat, lng) => {
    dispatch(saveUserAddress(cityName, countryName, lat, lng));
  },

  // // center doit etre un objet composé de lat et lng
  // setUserCityCenter: (center) => {
  //   dispatch(setNewCenter(center));
  // },
});

export default connect(mapStateToProps, mapDispatchToProps)(ModifyCity);
