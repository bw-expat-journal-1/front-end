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
  FETCH_COMMENTS_SUCCESS,
  GET_COMMENT_SUCCESS,
  GET_COMMENT_FETCHING,
  DELETE_COMMENT_FAILURE,
  DELETE_COMMENT_DATA,
  DELETE_COMMENT_SUCCESS,
} from "../actions/PostActions";

const initialState = {
  post: [],
  comments: [],
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
    case FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: action.payload,
      };
    case GET_COMMENT_FETCHING:
      return {
        ...state,
        isFetching: true,
      };
    case GET_COMMENT_SUCCESS:
      return {
        ...state,
        comments: action.payload,
      };

    case DELETE_COMMENT_SUCCESS:
      return {
        ...state,
        comments: action.payload,
      };
    case DELETE_COMMENT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
