const Actions = {
  requestData: (loading)  => {
    return { type: "REQUESTED_DATA", payload:loading };
  },
  requestDataSuccess: data => {
    return { type: "REQUESTED_DATA_SUCCESS", payload: data };
  },
  requestDataError: () => {
    return { type: "REQUESTED_DATA_ERROR" };
  }
};
export default Actions;
