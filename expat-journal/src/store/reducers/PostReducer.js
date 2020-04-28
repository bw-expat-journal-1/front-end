import {
  FETCH_POST_DATA,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE,
  ADD_POST_DATA,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,
  UPDATE_POST_DATA,
  UPDATE_POST_SUCCESS,
  UPDATE_POST_FAILURE,
  DELETE_POST_DATA,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAILURE,
} from "../actions/PostActions";

const initialState = {
  post: [],
  isFetching: false,
  isAdding: false,
  isUpdating: false,
  isDeleting: false,
  error: "",
};

export const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST_DATA:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_POST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        post: action.payload,
        error: "",
      };
    case FETCH_POST_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case ADD_POST_DATA:
      return {
        ...state,
        isAdding: true,
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        isAdding: false,
        post: action.payload,
        error: "",
      };
    case ADD_POST_FAILURE:
      return {
        ...state,
        isAdding: false,
        error: action.payload,
      };
    case UPDATE_POST_DATA:
      return {
        ...state,
        isUpdating: true,
      };
    case UPDATE_POST_SUCCESS:
      return {
        ...state,
        isUpdating: false,
        post: action.payload,
        error: "",
      };
    case UPDATE_POST_FAILURE:
      return {
        ...state,
        isUpdating: false,
        error: action.payload,
      };
    case DELETE_POST_DATA:
      return {
        ...state,
        isDeleting: true,
      };
    case DELETE_POST_SUCCESS:
      return {
        ...state,
        isDeleting: false,
        post: action.payload,
        error: "",
      };
    case DELETE_POST_FAILURE:
      return {
        ...state,
        isDeleting: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
