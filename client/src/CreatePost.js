import React, { useState } from "react";
import CheckBox from "./CheckBox";
import './CreatePost.css';
import { useHistory } from 'react-router-dom';

function CreatePost() {
  const [username, setUsername] = useState("Green Parrot");
  const [post, setPost] = useState("initial post");
  const [tags, setTags] = useState([
    { id: 1, value: "loss of a loved one", isChecked: false },
    { id: 2, value: "financial difficulties", isChecked: false },
    { id: 3, value: "emotional distress", isChecked: false },
    { id: 4, value: "other", isChecked: false },
  ]);
  const [emoji, setEmoji] = useState("happy");

  const formData = Object.freeze({
    username: username,
    post: post,
    tags: tags,
    emoji: emoji,
  });

  
  const handleCheckElement = (e) => {
    let updatedTags = tags;

    updatedTags.forEach((tag) => {
      if (tag.value === e.target.value) {
        tag.isChecked = e.target.checked;
      }
    });
    setTags(updatedTags);
    console.log(updatedTags);
  };

  const isModalVisible = false;

  const toggleModal = () => {
    isModalVisible = !isModalVisible;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const history = useHistory();
  

  return (
    <React.Fragment>
      <h1 className="create-post-heading">Create Post</h1>
      <form className="create-post-form" onSubmit={handleSubmit}>
        <h2>Posting as {username}</h2>
        <input
          className="create-post-text"
          type="text"
          value={post}
          onChange={(e) => setPost(e.target.value)}
        />

        <button className="add-tags-button" type="button" onClick={toggleModal}>
          Add tags
        </button>

        <ul className="tags">
          {tags.map((tag, index) => {
            return (
              <CheckBox key = {index} handleCheckElement={handleCheckElement} {...tag} />
            );
          })}
        </ul>

        <select
          className="emoji-select"
          value={emoji}
          onChange={(e) => setEmoji(e.target.value)}
        >
          <option value="happy">Happy</option>
          <option value="joyful">Joyful</option>
          <option value="excited">Excited</option>
          <option value="nervous">Nervous</option>
        </select>

        <div class="main-font" type="button"
                        style={{width: "10%", height: "45px", lineHeight: "45px", background: "linear-gradient(96.23deg, #FA80D2 0%, #FED757 100%)", textAlign: "center"}}
                        onClick={() => history.push('/feed')}>
                        
                        Create Post.
                    </div>  

        <button className="submit-button" type="submit">
          Create Post
        </button>
      </form>
    </React.Fragment>
  );
}

export default CreatePost;
