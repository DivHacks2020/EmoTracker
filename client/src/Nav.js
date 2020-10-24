import React from 'react';
import ActivityFeed from './ActivityFeed';
import CreatePost from './CreatePost';
import PosterDataDashboard from './PosterDataDashboard';
import LocationMoodTracker from './LocationMoodTracker';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


export default function App() {
  return (
    <React.Fragment>
     <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Create Post</Link>
            </li>
            <li>
              <Link to="/feed">Activity Feed</Link>
            </li>
            <li>
              <Link to="/data">Poster Data Dashboard</Link>
            </li>
            <li>
              <Link to="/tracker">Location Mood Tracker</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <CreatePost />
          </Route>
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
      </div>
    </Router>
    </React.Fragment>
  );
}