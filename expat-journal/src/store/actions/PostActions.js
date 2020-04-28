// import { axiosWithAuth } from "../utils/axiosWithAuth";

// export const fetchPosts = () => {
//   return (dispatch) => {
//     dispatch({ type: FETCH_POST_DATA });
//     axiosWithAuth()
//       .get("")
//       .then((res) => {
//         dispatch({ type: FETCH_POST_SUCCESS, payload: res.data });
//       })
//       .catch((err) => {
//         console.log(err);
//         dispatch({
//           type: FETCH_POST_FAILURE,
//           payload: err,
//         });
//       });
//   };
// };

// export const addPost = (newPost) => {
//   return (dispatch) => {
//     dispatch({ type: ADD_POST_DATA });
//     axiosWithAuth()
//       .post(``, newPost)
//       .then((res) => {
//         dispatch({ type: ADD_POST_SUCCESS, payload: res.data });
//       })
//       .catch((err) => {
//         console.log(err);
//         dispatch({
//           type: ADD_POST_FAILURE,
//           payload: err,
//         });
//       });
//   };
// };

// export const removePost = (id) => {
//   return (dispatch) => {
//     dispatch({ type: DELETE_POST_DATA, id: id });
//     axiosWithAuth()
//       .delete(``)
//       .then((res) => {
//         console.log(res);
//         dispatch({ type: DELETE_POST_SUCCESS, id: id });
//       })
//       .catch((err) => {
//         console.log(err);
//         dispatch({
//           type: DELETE_POST_FAILURE,
//           payload: err,
//         });
//       });
//   };
// };

// export const updatePost = (newPost) => {
//   return (dispatch) => {
//     dispatch({ type: UPDATE_POST_DATA });
//     axiosWithAuth()
//       .put(``, newPost)
//       .then((res) => {
//         dispatch({ type: UPDATE_POST_SUCCESS, payload: res.data });
//       })
//       .catch((err) => {
//         console.log(err);
//         dispatch({
//           type: UPDATE_POST_FAILURE,
//           payload: err,
//         });
//       });
//   };
// };
