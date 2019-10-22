const initialState = {
	isAuth: !!window.localStorage.token,
  };
  
  export default (state = initialState, { type, payload }) => {
	switch (type) {
	  case 'LOGIN':
		return {
		  ...state,
		  isAuth: payload,
		};
	  default:
		return state;
	}
  };