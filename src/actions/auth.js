const Actions = {
  setToken: () => dispatch => {
    dispatch({
      type: 'SET_TOKEN',
      payload: true
    });
  }
};
export default Actions;
