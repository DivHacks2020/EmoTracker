import React, { useState } from "react";

import Option from "./Option";
import TagsModal from "./TagsModal";

import "./CreatePost.css";

import * as emojis from "./data/emojis.json";

function CreatePost() {
  const [username, setUsername] = useState("Green Parrot");
  const [post, setPost] = useState("initial post");
  const [tags, setTags] = useState([]);
  const [emoji, setEmoji] = useState("happy");

  const formData = Object.freeze({
    username: username,
    post: post,
    tags: tags,
    emoji: emoji,
  });

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
        <TagsModal/>

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
