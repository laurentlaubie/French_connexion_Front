import { connect } from 'react-redux';

import ModifyMyHobbies from 'src/components/ModifyMyHobbies';

import { toggleCheckboxHobbies } from 'src/actions/hobbies';

// connection de props en lecture sur le state
// ces props seront des tableaux, objets, booléens, numériques, string
const mapStateToProps = (state, ownProps) => ({
  hobbiesList: state.hobbies.hobbiesList,
  myHobbies: state.log.connectedUserData.hobbies,
  checked: state.hobbies.selectedHobbies,
});

// connection de props fonctions qui déclenchent des actions
// ces props seraont des fonctions
const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleCheckbox: (value, checked) => {
    dispatch(toggleCheckboxHobbies(value, checked));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ModifyMyHobbies);
