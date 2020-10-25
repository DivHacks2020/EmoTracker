import React from 'react';
import ActivityFeed from './ActivityFeed';
import CreatePost from './CreatePost';
import PosterDataDashboard from './PosterDataDashboard';
import LocationMoodTracker from './LocationMoodTracker';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import GeolocationDemo from './GeolocationDemo';


export default function App() {
  return (
    <React.Fragment>
     <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/post">Create Post</Link>
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
            <li>
              <Link to="/geodemo">Geo Demo</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/post">
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
          <Route path="/geodemo">
            <GeolocationDemo />
          </Route>
        </Switch>
      </div>
    </Router>
    </React.Fragment>
  );
}
