import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import styles from './app';
import { Main } from './main';
import { AddBoard } from './main/addBoard';
import { ProfileCard } from './profileCard';
import { Settings } from './settings';

export const App = () => (
  <Router>
    <div className={styles.app}>
      <nav className="wraper">
        <div className="header">
          <Link to="/">
            <div className="button">Home</div>
          </Link>
          <AddBoard />
          <Link to="/settings">
            <div className="button">Settings</div>
          </Link>
        </div>
      </nav>

      <Switch>
        <Route path="/settings" component={Settings} />
        <Route path="/profileCard" component={ProfileCard} />
        <Route path="/" component={Main} />
      </Switch>
    </div>
  </Router>
);
