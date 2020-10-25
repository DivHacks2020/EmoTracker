import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import './App.css';

export default function FeedEmotional() {
  return (
    <React.Fragment>
        <ListGroup horizontal>
            <ListGroup.Item>
                <ColorDiv />
            </ListGroup.Item>
            <ListGroup.Item>
            <h4 className="main-font"><strong>Green Parrot #2211</strong></h4>
            <h4 className="secondary-font"><span class="badge badge-primary">Emotional Distress</span></h4>
            <p className="secondary-font">
            The lockdown has changed a lot of things. I'm feeling at a loss of what to do. First off, my schedule had to be changed entirely and it's causing me a lot of stress to adjust.
            </p>
            <div className="main-font" style={{color: "white", textAlign: "center", width: "10%", height: "45px", lineHeight: "45px", background: "linear-gradient(94.31deg, #7B81EC 0%, #61D4AC 100%)"}}>Respond.</div>
            </ListGroup.Item>
        </ListGroup>
    </React.Fragment>
  );
}

function ColorDiv(){
    return(
        
            <div style={{backgroundColor: "#298BC7", width: "20vw", height: "250px"}}></div>
    )
}
