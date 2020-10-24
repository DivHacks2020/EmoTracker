import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Nav from './Nav';
import Main from './Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route exact path="/" component={Main} />
      <Route exact path="/post" component={Nav} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
