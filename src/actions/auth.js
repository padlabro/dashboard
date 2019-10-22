const Actions = {
	setToken: token => (dispatch) => {
	  dispatch({
		type: "SET_TOKEN",
		payload: token
	  });
	}
  };
  export default Actions;
  