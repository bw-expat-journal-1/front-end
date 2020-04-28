// const LOGIN_PENDING = "LOGIN_PENDING";
// const LOGIN_SUCCESS = "LOGIN_SUCCESS";
// const LOGIN_ERROR = "LOGIN_ERROR";

import {
  LOGIN_PENDING,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
} from "../actions/loginAction";

const initialState = {
  id: "",
  username: "",
  isLoggingIn: false,
  isLoggedIn: false,
  loginError: null,
};

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_PENDING:
      return {
        ...state,
        isLoggingIn: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true,
        username: action.payload.username,
        id: action.payload.id,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        isLoggedIn: false,
        isLoggingIn: false,
        loginError: action.payload,
      };

    default:
      return state;
  }
};
