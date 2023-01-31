import * as actionTypes from "../../constants/actionTypes";

const initialState = {
  dreamHomes: [],
  //    isResponse:false
};

const dreamHomesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_DREAM_HOMES:
      return {
        dreamHomes: action.payload,
      };
    default:
      return state;
  }
};

export default dreamHomesReducer;
