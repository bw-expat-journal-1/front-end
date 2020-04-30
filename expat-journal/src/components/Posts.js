import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  fetchPosts,
  addPost,
  updatePost,
  removePost,
  fetchComments,
  addComment,
} from "../store/actions/PostActions";
import { useHistory } from "react-router-dom";


const Posts = (props) => {

    const getPosts = props.fetchPosts;

    const getComments = props.fetchComments;

  useEffect(() => {
    getPosts();
    getComments();
  }, [getPosts, getComments]);

  const [commentInput, setCommentInput] = useState({
    comment: "",
  });

  const { push } = useHistory();


  const handlecomment = (e) => {
    setCommentInput({
      ...commentInput,
      [e.target.name]: e.target.value,
    });
  };

  const addComments = (postId) => {
    const comment = {
      comment: commentInput.comment,
      postId: postId,
    };
    props.addComment(comment);
    setCommentInput({
      comment: "",
      userId: localStorage.getItem("userId"),
    });
  };

  // console.log("commments!!!!!!!!!!!!!!", props.comments);
  return (
    <div className="posts-container">
      <h1>Posts</h1>
      <div>
        {props.post.map((post) => (
          <div className="post" key={post.id}>
            <img src={`${post.post}`} className="photo" alt="newPhoto"></img>

            <p className="caption">{post.caption}</p>

            {post.userId === Number(localStorage.getItem("userId")) && (
              <div>
                <button onClick={() => push(`/api/posts/${post.id}`)}>
                  Edit
                </button>
                <button onClick={() => props.removePost(post.id)}>
                  Delete
                </button>
              </div>
            )}
            <div>
              {props.comments.map((comment) => (
                <div key={comment.id}>
                  {comment.postId === post.id && (
                    <div>
                      <div>{comment.comment}</div>
                    </div>
                  )}
                </div>
              ))}
              <form>
                <label htmlFor="comment" />
                <input
                  type="text"
                  id="comment"
                  name="comment"
                  value={commentInput.comment}
                  onChange={handlecomment}
                />
              </form>
              <button
                onClick={() => {
                  addComments(post.id);
                }}
              >
                add comment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  // console.log(state.post);
  return {
    post: state.PostReducer.post,
    error: state.PostReducer.error,
    comments: state.PostReducer.comments,
  };
};

export default connect(mapStateToProps, {
  fetchPosts,
  addPost,
  updatePost,
  removePost,
  fetchComments,
  addComment,
})(Posts);
