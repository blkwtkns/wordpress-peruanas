import * as types from '../../constants/actionTypes';
import initialState from '../../constants/initialState';

// Handle Contact related actions

const contactReducer = (state = initialState, action) => {
  console.log('state inside contactReducer', state)
  // console.log('action inside contactReducer', action.status, action.type)
  switch (action.type) {
    case types.PUT_CONTACT_FORM_SUCCESS:
      return {
        ...state,
        contactState: {dbInfo: action.status.dbInfo}
      }
    case types.PUT_CONTACT_FORM_ERROR:
      return {
        ...state,
        contactState: {dbInfo: action.status.dbInfo}

      }
    default:
      return state;
  }
};

export default contactReducer;
