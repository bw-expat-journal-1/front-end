import axios from "axios";

export const LOGIN_PENDING = "LOGIN_PENDING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";

export const login = (account) => (dispatch) => {
  dispatch({ type: LOGIN_PENDING });
  return axios
    .post("", account)
    .then((res) => {
      //   localStorage.setItem(token, res.data.token);
    })
    .catch((err) => {
      console.log("Error logging in", err);
      dispatch({ type: LOGIN_ERROR, payload: err });
    });
};
