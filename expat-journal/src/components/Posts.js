import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts, addPost } from "../store/actions/PostActions";
import PostForm from "./PostForm";

const Posts = (props) => {
  useEffect(() => {
    props.fetchPosts();
  });

  return (
    <div className="posts-container">
      {props.posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={post.photo} className="photo"></img>

          <p className="caption">{post.caption}</p>
        </div>
      ))}
      <PostForm addPost={addPost} />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    post: state.post,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchPosts, addPost })(Posts);
