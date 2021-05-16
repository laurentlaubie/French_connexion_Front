import { connect } from 'react-redux';

import ModifyCity from 'src/components/ModifyCity';
import { closeModifyCityModal } from 'src/actions/user';
import { setNewAdress, setNewCenter } from 'src/actions/map';

// connection de props en lecture sur le state
// ces props seront des tableaux, objets, booléens, numériques, string
const mapStateToProps = (state, ownProps) => ({
  isOpen: state.user.isModifyCityModalOpen,
  userAdress: state.user.userAdress,

});

// connection de props fonctions qui déclenchent des actions
// ces props seraont des fonctions
const mapDispatchToProps = (dispatch, ownProps) => ({
  close: () => {
    dispatch(closeModifyCityModal());
  },
  setUserAdress: (adress) => {
    dispatch(setNewAdress(adress));
  },
  // center doit etre un objet composé de lat et lng
  setUserCityCenter: (center) => {
    dispatch(setNewCenter(center));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ModifyCity);
