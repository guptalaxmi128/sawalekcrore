import { GET_DREAM_CARS } from "constants/actionTypes";
import { getCars } from "api/axiosRequest";

function getDreamCars() {
  return function (dispatch) {
    return getCars().then((res) => {
      console.log("response dataaccount", res);
      dispatch({
        type: GET_DREAM_CARS,
        payload: res.data,
      });
    });
  };
}

export default getDreamCars;
