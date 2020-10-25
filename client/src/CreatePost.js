import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

import Option from "./Option";
import TagsModal from "./TagsModal";

import * as emojis from "./data/emojis.json";
import Select from 'react-select';


function CreatePost() {
  const [username, setUsername] = useState("Green Peacock #5621");
  const [post, setPost] = useState("");
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

  const history = useHistory();
  

  return (
    <React.Fragment>
      <div style={{padding: "35px"}}>
      <h1 className="main-font">Create Post</h1>
      <form onSubmit={handleSubmit}>
        <h2 className="secondary-font">Posting as {username}</h2>
        <div class="form-group">
          <label for="userPost"></label>
          <textarea class="form-control" id="userPost" rows="5" placeholder="How are you feeling?" value={post} onChange={(e) => setPost(e.target.value)}></textarea>
        </div>
        
        <TagsModal/>

        <select
          className="emoji-select"
          value={emoji}
          onChange={(e) => setEmoji(e.target.value)}
          style = {{marginTop: "20px", marginBottom: "20px"}}
        >
          {emojis.emojis.map((emoji, index) => {
            return <Option key={index + 5} {...emoji} />;
          })}
        </select>
          <br />
        <button class="main-font" type="submit"
          style={{width: "10%", height: "45px", lineHeight: "45px", background: "linear-gradient(96.23deg, #FA80D2 0%, #FED757 100%)", textAlign: "center"}}
          onClick={() => history.push('/feed')}>
            Create Post.
        </button>  
      </form>
      </div>
    </React.Fragment>
  );
}

export default CreatePost;
