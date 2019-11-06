const initialState = {
  isAuth: !!window.localStorage.token
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_TOKEN':
      return {
        ...state,
        isAuth: payload
      };
    default:
      return state;
  }
};
