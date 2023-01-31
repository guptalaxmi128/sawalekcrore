import { GET_DREAM_HOMES } from "constants/actionTypes";
import { getHomes } from "api/axiosRequest";

function getDreamHomes() {
  return function (dispatch) {
    return getHomes().then((res) => {
      console.log("response dataaccount", res);
      dispatch({
        type: GET_DREAM_HOMES,
        payload: res.data,
      });
    });
  };
}

export default getDreamHomes;
