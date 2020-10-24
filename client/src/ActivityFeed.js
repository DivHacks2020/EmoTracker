import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Tab from 'react-bootstrap/Tab'
import TabContainer from 'react-bootstrap/TabContainer';
import TabContent from 'react-bootstrap/TabContent'
import TabPane from 'react-bootstrap/TabPane';
import Nav from 'react-bootstrap/Nav';

import FeedLoss from './FeedLoss';
import FeedFinancial from './FeedFinancial';
import FeedMental from './FeedMental';
import FeedEmotional from './FeedEmotional';
import FeedOther from './FeedOther';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';



export default function ActivityFeed() {
  return (
    <React.Fragment>
      <NavBar />
      <TabContainer defaultActiveKey="first">
        <Row>
          <Col>
            <Nav variant="pills">
              <Nav.Item>
                <Nav.Link eventKey="first">Experiencing Loss</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Financial Difficulties</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Mental Illness</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fourth">Emotional Distress</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fifth">Other</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          </Row>
          <Row style={{marginTop: "45px"}}>
          <Col>
            <TabContent>
              <TabPane eventKey="first">
                <FeedLoss />
              </TabPane>
              <TabPane eventKey="second">
                <FeedFinancial />
              </TabPane>
              <TabPane eventKey="third">
                <FeedMental />
              </TabPane>
              <TabPane eventKey="fourth">
                <FeedEmotional />
              </TabPane>
              <TabPane eventKey="fifth">
                <FeedOther />
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </TabContainer>
    </React.Fragment>
  );
}

function NavBar(){
  return(
    <React.Fragment>
      <Container fluid className="justify-content-start">
        <Row>  
          <Col><div class="main-font" style={{backgroundColor: "black", color: "white", padding: "15px", textAlign: "center", width: "10vw"}}>Project Name.</div>
          </Col>
          </Row>
          <Row style={{marginTop: "15px"}}>
          <Col>
            <div style={{width: "15vw"}}></div>
            <div class="main-font link">Activity Feed</div>
          </Col>
          <Col>
            <div class="main-font link">Mood Locator</div>
          </Col>
          <Col>
            <div class="main-font link">Search Poster</div>
          </Col>
          <Col>
            <div class="main-font link">Poster Data</div>
          </Col>  
        </Row>
      </Container>
      <div style={{width: "100vw", height: "5px", backgroundColor: "black", marginTop: "25px", marginBottom: "25px"}}></div>
    </React.Fragment>
  )
}