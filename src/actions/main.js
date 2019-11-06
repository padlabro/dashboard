const Actions = {
  openedCard: name => dispatch => {
    dispatch({
      type: 'OPEN_CARD',
      payload: name
    });
  }
};
export default Actions;
