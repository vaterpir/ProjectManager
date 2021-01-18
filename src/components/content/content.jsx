import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Board } from './board';
import { Home } from './home';
import styles from './content.scss';

export const Content = () => (
  <div className={styles.content}>
    <Switch>
      <Route path="/boards/:id" component={Board} />
      <Route path="/home" component={Home} />
      <Redirect from="/" to="/home" />
    </Switch>
  </div>
);
