import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts, addPost } from "../store/actions/PostActions";
import PostForm from "./PostForm";

const Posts = (props) => {
  useEffect(() => {
    props.fetchPosts();
  }, []);

  return (
    <div className="posts-container">
      <h1>Posts</h1>
      {props.post.map((post) => (
        <div className="post" key={post.id}>
          <img src={`${post.post}`} className="photo"></img>

          <p className="caption">{post.caption}</p>
        </div>
      ))}

      <PostForm addPost={addPost} />
    </div>
  );
};
const mapStateToProps = (state) => {
  console.log(state.post);
  return {
    post: state.PostReducer.post,
    error: state.PostReducer.error,
  };
};

export default connect(mapStateToProps, { fetchPosts, addPost })(Posts);
