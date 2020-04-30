import React, {useState} from 'react';
import { connect } from 'react-redux';
import {updatePost} from "../store/actions/PostActions";
import { useHistory, useParams } from "react-router-dom";

function UpdatePostForm (props) {
    const [updatePost, setUpdatePost] = useState({
        post:"",
        caption:"",
        userId: JSON.parse(localStorage.getItem("userId"))

    });
    
    const history  = useHistory();

    const {id} = useParams();
 
  const handleChanges = e => {

    setUpdatePost({...updatePost, 
        [e.target.name]:e.target.value});
  };

  const submitPost = e => {
    
    e.preventDefault();
    props.updatePost(updatePost, id);
    history.push('/post');
  }



    return (
        <div className='edit container'>
        <form>
        <div className='inputC'>
        <p>
            Post :
        </p>
         <input
            className="photo-img"
            type="text"
            name="post"
            value={updatePost.post}
            onChange={handleChanges}
          /> 
          </div>
          <div className='inputC'>
          <p>
            Caption :
          </p>
            <input
            id="caption"
            className="caption"
            type="text"
            name="caption"
            value={updatePost.caption}
            onChange={handleChanges}
          /> 
          </div>
          <button onClick={submitPost}>
				Edit Post
			</button>
        </form>
        
        </div>
      );

}

const mapStateToProps = (state) => ({
    isUpdating: state.PostReducer.isUpdating,
    updatePost: state.PostReducer.updatePost,
  });
  
  export default connect(mapStateToProps, { updatePost })(UpdatePostForm);