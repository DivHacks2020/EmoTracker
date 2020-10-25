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