import * as types from '../../constants/actionTypes';

// Returns action type and PUT_FORM
const putFormAction = (payload) => ({
  type: types.PUT_CONTACT_FORM,
  payload
})

export default putFormAction;
