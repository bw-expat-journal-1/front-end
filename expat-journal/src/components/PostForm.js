import React, {useState} from 'react';
import { connect } from 'react-redux';
import {addPost} from "../store/actions/PostActions";

function PostForm (props) {
    const [newPost, setNewPost] = useState({
        post: null,
        caption:""

    });
    
  const handleChanges = e => {
    console.log(e.target.files[0]);
    if (e.target.files && e.target.files[0]) {
        let img = e.target.files[0];
      setNewPost({
          ...newPost,
          [e.target.name]:e.target.value,
          post: URL.createObjectURL(img)
        });
 
        console.log('this is the state', newPost);
    }
  };

  const submitPost = e => {
    
    e.preventDefault();
   /* props.addPost(newPost);
    setNewPost({
        post:e.target.files[0],
        caption:""

    });*/
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
    isPosting: state.PostReducer.isPosting,
    newPost: state.PostReducer.newPost,
  });
  
  export default connect(mapStateToProps, { addPost })(PostForm);