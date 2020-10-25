import React, { useState } from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import * as posts from "./data/posts.json";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function Map() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [open, setOpen] = useState(false);


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
            <h2 className="main-font">
              {selectedPost.username}
            </h2>
            <p className="secondary-font">{selectedPost.post}</p>
            <div type="button" onClick={() => setOpen(true)} className="main-font" style={{color: "white", textAlign: "center", width: "60px", height: "35px", lineHeight: "35px", background: "linear-gradient(94.31deg, #7B81EC 0%, #61D4AC 100%)"}}>Respond.</div>
            
            <Modal
              show={open}
              onHide={() => setOpen(false)}
              backdrop="static"
            >
              <Modal.Header closeButton>
              <Modal.Title className="main-font">Respond to {selectedPost.username}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form.Group controlId="responseTextArea">
                  <Form.Label className="secondary-font">Give Support</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
              </Modal.Body>
              <Modal.Footer>
                <Button className="main-font" style={{backgroundColor: "black", color: "white", width: "20%"}} onClick={() => setOpen(false)}>
                  Close.
                </Button>
                <Button className="main-font" onClick={() => setOpen(false)} style={{color: "white", textAlign: "center", width: "20%", height: "36px", lineHeight: "18px", background: "linear-gradient(94.31deg, #7B81EC 0%, #61D4AC 100%)"}} type="submit" value="Submit">Send.</Button>
              </Modal.Footer>
            </Modal>

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
      <h1 className="main-font" style={{margin: "45px"}}>Location Mood Tracker</h1>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&libraries=geometry,drawing,places&v=weekly`}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "400px" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </React.Fragment>
  );
}
