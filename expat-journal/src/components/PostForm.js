import React, { useState } from "react";
import { connect } from "react-redux";
import { addPost } from "../store/actions/PostActions";
import { useHistory } from "react-router-dom";

function PostForm(props) {
  const [newPost, setNewPost] = useState({
    post: "",
    caption: "",
    userId: localStorage.getItem("userId"),
  });

  const history = useHistory();

  const handleChanges = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };

  const submitPost = (e) => {
    e.preventDefault();
    props.addPost(newPost);
    history.push("/post");
  };

  return (
    <div className="upload container">
      <form>
        <div className="inputC">
          <p>Post :</p>
          <input
            className="photo-img"
            type="text"
            name="post"
            value={newPost.post}
            onChange={handleChanges}
          />
        </div>
        <div className="inputC">
          <p>Caption :</p>

          <input
            className="caption"
            type="text"
            name="caption"
            value={newPost.caption}
            onChange={handleChanges}
          />
        </div>

        <button onClick={submitPost}>Upload New Post</button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isPosting: state.PostReducer.isPosting,
  newPost: state.PostReducer.newPost,
});

export default connect(mapStateToProps, { addPost })(PostForm);
