import { connect } from 'react-redux';

import ModifyHelperSection from 'src/components/ModifyHelperSection';

import { toggleHelperCheckbox } from 'src/actions/modifyForm';

// connection de props en lecture sur le state
// ces props seront des tableaux, objets, booléens, numériques, string
const mapStateToProps = (state, ownProps) => ({
  isLoaded: state.hobbies.isLoaded && state.services.isLoaded,
  helper: state.log.connectedUserData.helper,
});

// connection de props fonctions qui déclenchent des actions
// ces props seraont des fonctions
const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleHelperCheckbox: (helper) => {
    dispatch(toggleHelperCheckbox(helper));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ModifyHelperSection);
