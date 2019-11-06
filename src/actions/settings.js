const Actions = {
  addUser: user => dispatch => {
    dispatch({
      type: 'ADD_USER',
      payload: user
    });
  },
  setActiveUser: id => dispatch => {
    dispatch({
      type: 'SET_ACTIVE_USER',
      payload: id
    });
  },

  editUser: user => dispatch => {
    dispatch({
      type: 'EDIT_USER',
      payload: user
    });
  },
  deleteUser: () => dispatch => {
    dispatch({
      type: 'DELETE_USER'
    });
  }
};
export default Actions;
