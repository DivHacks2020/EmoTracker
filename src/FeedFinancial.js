import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import './App.css';

export default function FeedFinancial() {
  return (
    <React.Fragment>
        <ListGroup horizontal>
            <ListGroup.Item>
                <ColorDiv />
            </ListGroup.Item>
            <ListGroup.Item>
            <h4 className="main-font"><strong>White Monkey #8794</strong></h4>
            <h4 className="secondary-font"><span class="badge badge-success">Financial Difficulties</span></h4>
            <p className="secondary-font">
            Recently, it's been stressful at home. I'm currently the only working parent and the loss of benefits have definitely made things harder. I don't know what to tell the kids.
            </p>
            <div className="main-font" style={{color: "white", textAlign: "center", width: "10%", height: "45px", lineHeight: "45px", background: "linear-gradient(94.31deg, #7B81EC 0%, #61D4AC 100%)"}}>Respond.</div>
            </ListGroup.Item>
        </ListGroup>
    </React.Fragment>
  );
}

function ColorDiv(){
    return(
        
            <div style={{backgroundColor: "#61D4AC", width: "20vw", height: "250px"}}></div>
    )
}
