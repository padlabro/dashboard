const initialState = {
  users: [],
  activeUser: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'ADD_USER':
      return {
        ...state,
        users: [...state.users, payload]
      };
    case 'SET_ACTIVE_USER':
      return {
        ...state,
        activeUser: payload
      };
    case 'EDIT_USER':
      return {
        ...state,
        users: state.users.map((item, i) => (i === state.activeUser ? payload : item))
      };
    case 'DELETE_USER':
      return {
        ...state,
        activeUser: false,
        users: state.users.filter((item, i) => i !== state.activeUser)
      };
    default:
      return state;
  }
};
