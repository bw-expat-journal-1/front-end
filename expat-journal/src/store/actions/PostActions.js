import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const FETCH_POST_DATA = "FETCH_POST_DATA";
export const FETCH_POST_SUCCESS = "FETCH_POST_SUCCESS";
export const FETCH_POST_FAILURE = "FETCH_POST_FAILURE";

export const ADD_POST_DATA = "ADD_POST_DATA";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";

export const UPDATE_POST_DATA = "UPDATE_POST_DATA";
export const UPDATE_POST_SUCCESS = "UPDATE_POST_SUCCESS";
export const UPDATE_POST_FAILURE = "UPDATE_POST_FAILURE";

export const DELETE_POST_DATA = "DELETE_POST_DATA";
export const DELETE_POST_SUCCESS = "DELETE_POST_SUCCESS";
export const DELETE_POST_FAILURE = "DELETE_POST_FAILURE";

export const fetchPosts = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_POST_DATA });
    axiosWithAuth()
      .get("http://localhost:5010/api/posts")
      .then((res) => {
        dispatch({ type: FETCH_POST_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: FETCH_POST_FAILURE,
          payload: err,
        });
      });
  };
};

export const addPost = (newPost) => {
  return (dispatch) => {
    dispatch({ type: ADD_POST_DATA });
    axiosWithAuth()
      .post(`/api/posts`, newPost)
      .then((res) => {
        dispatch({ type: ADD_POST_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: ADD_POST_FAILURE,
          payload: err,
        });
      });
  };
};

export const removePost = (id) => {
  return (dispatch) => {
    dispatch({ type: DELETE_POST_DATA, id: id });
    axiosWithAuth()
      .delete(``)
      .then((res) => {
        console.log(res);
        dispatch({ type: DELETE_POST_SUCCESS, id: id });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: DELETE_POST_FAILURE,
          payload: err,
        });
      });
  };
};

export const updatePost = (newPost) => {
  return (dispatch) => {
    dispatch({ type: UPDATE_POST_DATA });
    axiosWithAuth()
      .put(``, newPost)
      .then((res) => {
        dispatch({ type: UPDATE_POST_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: UPDATE_POST_FAILURE,
          payload: err,
        });
      });
  };
};
