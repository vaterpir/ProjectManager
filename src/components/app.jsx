import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import styles from './app.scss';
import { Main } from './main';
import { CardDetail } from './cardDetail';
import { Settings } from './settings';

export const App = () => (
  <Router>
    <div className={styles.app}>
      <nav className="wraper">
        <div className="header">
          <Link to="/">
            <div className="button">
              <HomeIcon />
              Доски
            </div>
          </Link>
          <Link to="/settings">
            <div className="button">Settings</div>
          </Link>
        </div>
      </nav>

      <Switch>
        <Route path="/settings" component={Settings} />
        <Route path="/cardDetail/:id" component={CardDetail} />
        <Route path="/" component={Main} />
      </Switch>
    </div>
  </Router>
);
