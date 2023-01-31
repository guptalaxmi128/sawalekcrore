import * as actionTypes from "../../constants/actionTypes";

const initialState = {
  dreamCars: [],
  //    isResponse:false
};

const dreamCarsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_DREAM_CARS:
      return {
        dreamCars: action.payload,
      };
    default:
      return state;
  }
};

export default dreamCarsReducer;
