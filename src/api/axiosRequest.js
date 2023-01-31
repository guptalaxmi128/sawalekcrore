import axios from "axios";

export async function AxiosRequest(url, method, headers, params) {
  return params
    ? axios({
        // url: url,
        // method: method,
        // headers: headers,
        // data: params,
        // timeout:1000
        url,
        method,
        headers,
        params,
      })
    : axios({
        // url: url,
        // method: method,
        // headers: headers,
        // data: {},
        // timeout:1000
        url,
        method,
        headers,
        data: {},
      });
}

export function getAccount() {
  const headers = {
    "Content-Type": "application/json",
  };
  return AxiosRequest("http://localhost:5000/api/getMyRetirementPlans/1", "GET", headers, {});
}

// export function getRetirementPlans() {
//   const headers = {
//     "Content-Type": "application/json",
//   };
//   return AxiosRequest("http://localhost:5000/api/getMyRetirementPlans/1", "GET", headers, {});
// }

export function getHomes() {
  const headers = {
    "Content-Type": "application/json",
  };
  return AxiosRequest("http://localhost:5000/api/getAllDreamHomes", "GET", headers, {});
}

export function getCars() {
  const headers = {
    "Content-Type": "application/json",
  };
  return AxiosRequest("http://localhost:5000/api/getAllDreamCars", "GET", headers, {});
}
