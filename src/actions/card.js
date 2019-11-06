const Actions = {
  requestData: loading => ({ type: 'REQUESTED_DATA', payload: loading }),
  requestDataSuccess: data => ({ type: 'REQUESTED_DATA_SUCCESS', payload: data }),
  requestDataError: () => ({ type: 'REQUESTED_DATA_ERROR' })
};
export default Actions;
