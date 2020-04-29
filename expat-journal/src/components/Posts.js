import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts, addPost, updatePost } from "../store/actions/PostActions";
import { useHistory} from "react-router-dom";



const Posts = (props) => {
  useEffect(() => {
    props.fetchPosts();
  }, []);

  const {push}  = useHistory();

  return (
    <div className="posts-container">
      <h1>Posts</h1>
      {props.post.map((post) => (
        <div className="post" key={post.id}>
          <img src={`${post.post}`} className="photo"></img>

          <p className="caption">{post.caption}</p>
          <button onClick={() => push(`/api/posts/${post.id}`)}>Edit</button>
          
        </div>
      ))}
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

export default connect(mapStateToProps, { fetchPosts, addPost, updatePost })(Posts);
