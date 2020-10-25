import React, { useEffect, useState } from "react";

import CheckBox from "./CheckBox";
import Option from "./Option";
import TagsModal from "./TagsModal";

import "./CreatePost.css";

import * as emojis from "./data/emojis.json";

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
        {/* <TagsModal/> */}

        <ul className="tags">
          {tags.map((tag, index) => {
            return (
              <CheckBox
                key={index}
                handleCheckElement={handleCheckElement}
                {...tag}
              />
            );
          })}
        </ul>

        <select
          className="emoji-select"
          value={emoji}
          onChange={(e) => setEmoji(e.target.value)}
        >
          {emojis.emojis.map((emoji, index) => {
            return <Option key={index + 5} {...emoji} />;
          })}
        </select>
        <button className="submit-button" type="submit">
          Create Post
        </button>
      </form>
    </React.Fragment>
  );
}

export default CreatePost;
