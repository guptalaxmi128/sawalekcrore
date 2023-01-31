import * as actionTypes from "../../constants/actionTypes";

const initialState = {
  accounts: [],
  //    isResponse:false
};

const accountsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ACCOUNT:
      return {
        accounts: action.payload,
      };
    default:
      return state;
  }
};

export default accountsReducer;
