import React, {useState} from 'react';
import { connect } from 'react-redux';
import {addPost} from "../store/actions/PostActions";
import { useHistory } from "react-router-dom";

function PostForm (props) {
    const [newPost, setNewPost] = useState({
        post:"",
        caption:""

    });
    
    const history  = useHistory();
  const handleChanges = e => {

    setNewPost({...newPost, 
        [e.target.name]:e.target.value});
  };

  const submitPost = e => {
    
    e.preventDefault();
    props.addPost(newPost);
    history.push('/post');
  }



    return (
        <form>
            <p> Post :
         <input
            className="photo-img"
            type="text"
            name="post"
            value={newPost.post}
            onChange={handleChanges}
          /> </p>
         <p> Caption :
            <textarea
            className="caption"
            type="text"
            name="caption"
            value={newPost.caption}
            onChange={handleChanges}
          /> </p>
  
              
         <button onClick={submitPost}>
				Upload New Post
			</button>
        </form>
      );

}

const mapStateToProps = (state) => ({
    isPosting: state.PostReducer.isPosting,
    newPost: state.PostReducer.newPost,
  });
  
  export default connect(mapStateToProps, { addPost })(PostForm);