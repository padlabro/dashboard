const initialState = {
  nameOfCard: '',
  loading: false,
  data: {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'OPEN_CARD':
      return {
        ...state,
        nameOfCard: payload
      };
    case 'REQUESTED_DATA':
      return {
        ...state,
        loading: payload
      };
    case 'REQUESTED_DATA_SUCCESS':
      return {
        ...state,
        data: payload
      };
    default:
      return state;
  }
};
