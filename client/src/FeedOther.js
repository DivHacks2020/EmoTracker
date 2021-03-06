import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import './App.css';

export default function FeedOther() {
  return (
    <React.Fragment>
        <ListGroup horizontal>
            <ListGroup.Item>
                <ColorDiv />
            </ListGroup.Item>
            <ListGroup.Item>
            <h4 className="main-font"><strong>Green Parrot #1122</strong></h4>
            <h4 className="secondary-font"><span class="badge badge-dark">Other</span></h4>
            <p className="secondary-font">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
            <div className="main-font" style={{color: "white", textAlign: "center", width: "10%", height: "45px", lineHeight: "45px", background: "linear-gradient(94.31deg, #7B81EC 0%, #61D4AC 100%)"}}>Respond.</div>
            </ListGroup.Item>
        </ListGroup>
    </React.Fragment>
  );
}

function ColorDiv(){
    return(
        
            <div style={{backgroundColor: "#7F64B8", width: "20vw", height: "250px"}}></div>
    )
}
