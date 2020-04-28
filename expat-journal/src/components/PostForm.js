import React, {useState} from 'react';

export default function PostForm (props) {
    const [newPost, setNewPost] = useState({
        photo:"",
        caption:"",
        date:"" 

    });
    
  const handleChanges = e => {

    setNewPost({...newPost, 
        [e.target.name]:e.target.value});
  };

  const submitPost = () => {
    
    props.addPost(newPost);
    setNewPost({
        photo:"",
        caption:"",
        date:""

    });
  }



    return (
        <form>
         <input
            className="photo-img"
            type="file"
            name="photo-img"
            value={newPost.photo}
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
          <p>
              Date :
            <input
            className="date"
            type="date"
            name="date"
            value={newPost.date}
            onChange={handleChanges}
          /> </p>
         <button onClick={submitPost}>
				Upload New Post
			</button>
        </form>
      );

}