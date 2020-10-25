import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Select, { components } from "react-select";

import TagsModal from "./TagsModal";

import * as emojis from "./data/emojis.json";

function CreatePost() {
  const [location, setLocation] = useState([39, -98]);
  const [username, setUsername] = useState("Green Peacock #5621");
  const [post, setPost] = useState("");
  const [tags, setTags] = useState(["other"]);
  const [emoji, setEmoji] = useState("happy");

  const formData = Object.freeze({
    username: username,
    post: post,
    tags: tags,
    emoji: emoji,
    lat: location[0],
    long: location[1],
  });

  const { Option } = components;

  const IconOption = (props) => (
    <Option {...props}>
      <img
        src={props.data.link}
        style={{ width: 36 }}
        alt={props.data.value}
        className="mr-3"
      />
      
      {props.data.label}
    </Option>
  );

  const history = useHistory();

  const findCoordinates = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation([position.coords.latitude, position.coords.longitude]);
      },
      (error) => alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  useEffect(() => {
    findCoordinates();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    history.push("/feed");
  };

  const onChangeValueHandler = (values) => {
    setTags(values);
  };

  return (
    <React.Fragment>
      <div style={{ padding: "35px" }}>
        <h1 className="main-font">Create Post</h1>
        <form onSubmit={handleSubmit}>
          <h2 className="secondary-font">Posting as {username}</h2>
          <div class="form-group">
            <label for="userPost"></label>
            <textarea
              class="form-control"
              id="userPost"
              rows="5"
              placeholder="How are you feeling?"
              value={post}
              onChange={(e) => setPost(e.target.value)}
            ></textarea>
          </div>

          <TagsModal value={tags} onChangeValue={onChangeValueHandler} />

          <Select 
            options={emojis.emojis} 
            components={{ Option: IconOption }}
            onChange={(e) => setEmoji(e)}
            className="my-3" 
          />
          <br />
          <button
            class="main-font"
            type="submit"
            style={{
              width: "10%",
              height: "45px",
              lineHeight: "45px",
              background: "linear-gradient(96.23deg, #FA80D2 0%, #FED757 100%)",
              textAlign: "center",
            }}
            // onClick={() => history.push("/feed")} moved to handleSubmit()
          >
            Create Post.
          </button>
        </form>
      </div>
    </React.Fragment>
  );
}

export default CreatePost;
