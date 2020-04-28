import axios from "axios";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const LOGIN_PENDING = "LOGIN_PENDING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";

export const login = (account) => (dispatch) => {
  dispatch({ type: LOGIN_PENDING });
  return axiosWithAuth()
    .post("/api/login", account)
    .then((res) => {
      localStorage.setItem("token", JSON.stringify(res.data.payload));
      this.props.history.push("/protected");
    })
    .catch((err) => {
      console.log("Error logging in", err);
      dispatch({ type: LOGIN_ERROR, payload: err });
    });
};
