import { connect } from 'react-redux';

import UsersCards from 'src/components/UsersCards';
import { loadUsersCards, RenderNewList, changeInputValue } from 'src/actions/user';


// connection de props en lecture sur le state
// ces props seront des tableaux, objets, booléens, numériques, string
const mapStateToProps = (state, ownProps) => ({
  usersList: state.user.usersList,
  newUserList: state.user.newUserList,
<<<<<<< HEAD
  inputValue: state.user.inputValue,
=======
  isLoading: state.user.isLoading,
>>>>>>> 219711ab4b255ba8de3c9bc6b67d355971b69a18
});

// connection de props fonctions qui déclenchent des actions
// ces props seraont des fonctions
const mapDispatchToProps = (dispatch, ownProps) => ({
  loadUsersCards: () => {
    dispatch(loadUsersCards());
  },
  RenderNewList: (result) => {
    dispatch(RenderNewList(result));
  },
  ChangeInputValue: (inputValue) => {
    dispatch(changeInputValue(inputValue));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersCards);
