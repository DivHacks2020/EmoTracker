import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import './App.css';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export default function FeedLoss() {
  const [open, setOpen] = useState(false);
  
  return (
    <React.Fragment>
        <ListGroup horizontal>
            <ListGroup.Item>
                <ColorDiv />
            </ListGroup.Item>
            <ListGroup.Item>
            <h4 className="main-font"><strong>Black Hawk #9711</strong></h4>
            <h4 className="secondary-font"><span class="badge badge-info">Experiencing Loss</span></h4>
            <p className="secondary-font">
            It's been hard. It's been hard dealing with grief. And watching the things on the news, the whole debate on wearing masks, and people not believing in it just.. I'm at a loss.
            </p>
            <div type="button" onClick={() => setOpen(true)} className="main-font" style={{color: "white", textAlign: "center", width: "10%", height: "45px", lineHeight: "45px", background: "linear-gradient(94.31deg, #7B81EC 0%, #61D4AC 100%)"}}>Respond.</div>
            
            <Modal
              show={open}
              onHide={() => setOpen(false)}
              backdrop="static"
            >
              <Modal.Header closeButton>
                <Modal.Title className="main-font">Respond</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form.Group controlId="responseTextArea">
                  <Form.Label></Form.Label>
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

            
            </ListGroup.Item>
        </ListGroup>

       

    </React.Fragment>
  );
}

function ColorDiv(){
    return(
        
            <div style={{backgroundColor: "#FED757", width: "20vw", height: "250px"}}></div>
    )
}
