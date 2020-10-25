import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import './App.css';

export default function FeedMental() {
  return (
    <React.Fragment>
        <ListGroup horizontal>
            <ListGroup.Item>
                <ColorDiv />
            </ListGroup.Item>
            <ListGroup.Item>
            <h4 className="main-font"><strong>Pink Flamingo #3245</strong></h4>
            <h4 className="secondary-font"><span class="badge badge-warning">Mental Illness</span></h4>
            <p className="secondary-font">
            It's getting hard for me to sleep every day. Nowadays, just the thought of going to bed stresses me out. I would lie in bed, and even if I'm exhausted, my brain just won't shut down.
            </p>
            <div className="main-font" style={{color: "white", textAlign: "center", width: "10%", height: "45px", lineHeight: "45px", background: "linear-gradient(94.31deg, #7B81EC 0%, #61D4AC 100%)"}}>Respond.</div>
            </ListGroup.Item>
        </ListGroup>
    </React.Fragment>
  );
}

function ColorDiv(){
    return(
        
            <div style={{backgroundColor: "#E98196", width: "20vw", height: "250px"}}></div>
    )
}
