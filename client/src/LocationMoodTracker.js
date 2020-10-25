import React, { useState } from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import * as posts from "./data/posts.json";

function Map() {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <GoogleMap defaultZoom={5} defaultCenter={{ lat: 39, lng: -98 }}>
      {posts.posts.map((post) => {
        return (
          <Marker
            key={post.id}
            position={{ lat: post.latitude, lng: post.longitude }}
            onClick={() => {
              setSelectedPost(post);
            }}
            icon={{
              url: `/assets/svg/${post.emoji}.svg`,
              scaledSize: new window.google.maps.Size(40,40)
            }}
          />
        );
      })}

      {selectedPost && (
        <InfoWindow
          position={{ lat: selectedPost.latitude, lng: selectedPost.longitude }}
          onCloseClick={() => {
            setSelectedPost(null);
          }}
        >
          <div>
            <h2>
              {selectedPost.username}
            </h2>
            <p>{selectedPost.post}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function LocationMoodTracker() {
  return (
    <React.Fragment>
      <h1>Location Mood Tracker</h1>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&libraries=geometry,drawing,places&v=weekly`}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "400px" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </React.Fragment>
  );
}
