import { axiosWithAuth } from '../utils/axiosWithAuth';



export const fetchPosts = () => {
  return dispatch => {
    dispatch({ type: 'FETCH_POSTS_DATA' });
    axiosWithAuth()
      .get('')
      .then(res => {
        dispatch({ type: 'FETCH_POST_SUCCESS', payload: res.data});
      })
      .catch(err => {
        console.log(err.response);
        dispatch({
          type: 'FETCH_POST_FAILURE',
          payload: `Error ${err.response.status}: ${err.response.data}`
        });
      });
  };
};

export const addPost = newPost => {
    return dispatch => {
        dispatch({ type: 'ADD_POSTS_DATA' });
        axiosWithAuth()
        .post(``, newPost)
        .then(res => {
            dispatch({ type: 'ADD_POST_SUCCESS', payload: res.data});
        })
        .catch(error => {
          console.log("the data was not posted", error);
        });
      };
    };


export const removePost = id => {
    return dispatch => {
        dispatch({ type: 'DELETE_POSTS_DATA', id: id });
        axiosWithAuth()
        .delete(``)
        .then(res => {
            dispatch({ type: 'DELETE_POST_SUCCESS', id: id});
        })
        .catch(error => {
          console.log("the data was not deleted", error);
        });
    }
}

export const updatePost = newPost => {
    return dispatch => {
        dispatch({ type: 'UPDATE_POSTS_DATA' });
        axiosWithAuth()
        .put(``, newPost)
        .then(res => {
            dispatch({ type: 'UPDATE_POST_SUCCESS', payload: res.data});
        })
        .catch(error => {
          console.log("the data was not updated", error);
        });
      };
    };



