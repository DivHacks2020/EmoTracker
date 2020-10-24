import React from 'react';
import ActivityFeed from './ActivityFeed';
import CreatePost from './CreatePost';
import PosterDataDashboard from './PosterDataDashboard';
import LocationMoodTracker from './LocationMoodTracker';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



export default function Nav() {
    const history = useHistory();
    return(
        <React.Fragment>
          <Router>  
          <Container fluid className="justify-content-start">
            <Row>  
              <Col><div class="main-font" style={{backgroundColor: "black", color: "white", padding: "15px", textAlign: "center", width: "10vw"}}>Project Name.</div>
              </Col>
              </Row>
              <Row style={{marginTop: "15px"}}>
              <Col>
                <div style={{width: "15vw"}}></div>
                <div class="main-font link"><Link to="/feed">Activity Feed</Link></div>
              </Col>
              <Col>
                <div class="main-font link"><Link to="/tracker">Mood Locator</Link></div>
              </Col>
              <Col>
                <div class="main-font link">Search Poster</div>
              </Col>
              <Col>
                <div class="main-font link"><Link to="/data">Poster Data</Link></div>
              </Col>  
            </Row>
          </Container>
          
          <div style={{width: "100vw", height: "5px", backgroundColor: "black", marginTop: "25px", marginBottom: "25px"}}></div>
          <Switch>
          <Route path="/feed">
            <ActivityFeed />
          </Route>
          <Route path="/data">
            <PosterDataDashboard />
          </Route>
          <Route path="/tracker">
            <LocationMoodTracker />
          </Route>
          </Switch>    
          </Router>
        </React.Fragment>
      );
}
