import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { updatePost } from "../store/actions/PostActions";
import { useHistory, useParams } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

function UpdatePostForm(props) {
  const [postUpdate, setPostUpdate] = useState({
    post: "",
    caption: "",
    userId: JSON.parse(localStorage.getItem("userId")),
  });

  const history = useHistory();

  const { id } = useParams();

  useEffect(() => {
    axiosWithAuth()
      .get(`https://expat-journal-server.herokuapp.com/api/posts/${id}`)
      .then((res) => {
        const post = res.data[0];
        setPostUpdate({
          post: post.post,
          caption: post.caption,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleChanges = (e) => {
    setPostUpdate({ ...postUpdate, [e.target.name]: e.target.value });
  };

  const submitPost = (e) => {
    e.preventDefault();
    props.updatePost(postUpdate, id);
    history.push("/post");
  };

  return (
    <div className="edit container">
      <form>
        <div className="inputC">
          <p>Post :</p>
          <input
            className="photo-img"
            type="text"
            name="post"
            value={postUpdate.post}
            onChange={handleChanges}
          />
        </div>
        <div className="inputC">
          <p>Caption :</p>
          <input
            id="caption"
            className="caption"
            type="text"
            name="caption"
            value={postUpdate.caption}
            onChange={handleChanges}
          />
        </div>
        <button onClick={submitPost}>Edit Post</button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isUpdating: state.PostReducer.isUpdating,
  updatePost: state.PostReducer.updatePost,
});

export default connect(mapStateToProps, { updatePost })(UpdatePostForm);
