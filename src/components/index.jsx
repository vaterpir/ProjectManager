import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styles from './app';
import { Main } from './main';
import { Settings } from './settings';

export const App = () => (
  <Router>
    <div className={styles.app}>
      <nav className="header">
        <Link to="/">
          <div>Home</div>
        </Link>
        <Link to="/settings">
          <div>Settings</div>
        </Link>
      </nav>

      <Switch>
        <Route path="/settings">
          <Settings />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </div>
  </Router>
);
