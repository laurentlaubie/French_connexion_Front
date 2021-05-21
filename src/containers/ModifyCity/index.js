import { connect } from 'react-redux';

import ModifyCity from 'src/components/ModifyCity';
import { closeModifyCityModal } from 'src/actions/user';
import { setNewAddress, saveNewAddress } from 'src/actions/modifyForm';
// connection de props en lecture sur le state
// ces props seront des tableaux, objets, booléens, numériques, string
const mapStateToProps = (state, ownProps) => ({
  isOpen: state.user.isModifyCityModalOpen,
  // userAddress: state.user.userAdress,
  address: state.log.newAddress,
  completeAddress: state.log.completeNewAddress,

});

// connection de props fonctions qui déclenchent des actions
// ces props seraont des fonctions
const mapDispatchToProps = (dispatch, ownProps) => ({
  close: () => {
    dispatch(closeModifyCityModal());
  },
  setNewAddress: (address) => {
    dispatch(setNewAddress(address));
  },
  saveNewAddress: (cityName, countryName, lat, lng) => {
    dispatch(saveNewAddress(cityName, countryName, lat, lng));
  },

  // // center doit etre un objet composé de lat et lng
  // setUserCityCenter: (center) => {
  //   dispatch(setNewCenter(center));
  // },
});

export default connect(mapStateToProps, mapDispatchToProps)(ModifyCity);
