import React, {useState} from 'react';
import { connect } from 'react-redux';
import {addPost} from "../store/actions/PostActions";

function PostForm (props) {
    const [newPost, setNewPost] = useState({
        post:"",
        caption:""

    });
    
  const handleChanges = e => {

    setNewPost({...newPost, 
        [e.target.name]:e.target.value});
  };

  const submitPost = e => {
    
    e.preventDefault();
    props.addPost(newPost);
    setNewPost({
        post:"",
        caption:""

    });
  }



    return (
        <form>
         <input
            className="photo-img"
            type="file"
            name="photo-img"
            value={newPost.post}
            onChange={handleChanges}
          />
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
    isPosting: state.isPosting,
    newPost: state.newPost,
  });
  
  export default connect(mapStateToProps, { addPost })(PostForm);