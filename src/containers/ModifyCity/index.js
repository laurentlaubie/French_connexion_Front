import { connect } from 'react-redux';

import ModifyCity from 'src/components/ModifyCity';
import { closeModifyCityModal } from 'src/actions/user';
import { setNewAddress, saveNewAddress, resetCityField } from 'src/actions/modifyForm';
// connection de props en lecture sur le state
// ces props seront des tableaux, objets, booléens, numériques, string
const mapStateToProps = (state, ownProps) => ({
  isOpen: state.user.isModifyCityModalOpen,
  address: state.log.newAddress,
  completeAddress: state.log.completeNewAddress,
});

// connection de props fonctions qui déclenchent des actions
// ces props seront des fonctions
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
  resetCityField: () => {
    dispatch(resetCityField());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ModifyCity);
