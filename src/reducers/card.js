const initialState = {
  nameOfCard: '',
  data: {},
  loading: false,
  error: false
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
        error: false,
        loading: payload
      };
    case 'REQUESTED_DATA_SUCCESS':
      return {
        ...state,
        data: payload,
        loading: false
      };
    case 'REQUESTED_DATA_ERROR':
      return {
        ...state,
        error: true,
        loading: false
      };
    default:
      return state;
  }
};
