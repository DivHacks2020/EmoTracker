import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import './App.css';

export default function FeedLoss() {
  //axios call to pull data from database  
  return (
    <React.Fragment>
        <ListGroup horizontal>
            <ListGroup.Item>
                <ColorDiv />
            </ListGroup.Item>
            <ListGroup.Item>
            <h4 className="main-font"><strong>Green Parrot #1122</strong></h4>
            <h4 className="secondary-font"><span class="badge badge-info">Experiencing Loss</span></h4>
            <p className="secondary-font">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
            <div type="button" className="main-font" data-toggle="modal" data-target="#respondModal" style={{color: "white", textAlign: "center", width: "10%", height: "45px", lineHeight: "45px", background: "linear-gradient(94.31deg, #7B81EC 0%, #61D4AC 100%)"}}>Respond.</div>
            
            <div class="modal fade" id="respondModal" role="dialog" aria-labelledby="respondModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="respondModalLabel">Respond</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <label for="response" class="col-form-label">Reply:</label>
            <textarea class="form-control" id="response"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Send</button>
      </div>
    </div>
  </div>
</div>
            
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
