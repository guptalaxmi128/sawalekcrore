import { GET_ACCOUNT } from "constants/actionTypes";
import { getAccount } from "api/axiosRequest";

function getAccountValues() {
  return function (dispatch) {
    return getAccount().then((res) => {
      console.log("response dataaccount", res);
      dispatch({
        type: GET_ACCOUNT,
        payload: res.data,
      });
    });
  };
}

// export function getRetirementPlansValues() {
//   return function (dispatch) {
//     return getRetirementPlans().then((res) => {
//       console.log("response data get RetirementPlans Value", res);
//       dispatch({
//         type: GET_RETIREMENT_PLANS,
//         payload: res.data,
//       });
//     });
//   };
// }

export default getAccountValues;
