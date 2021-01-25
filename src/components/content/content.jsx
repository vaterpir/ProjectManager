import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Board } from './board';
import { Home } from './home';
import { CardDetail } from './cardDetail';
import styles from './content.scss';

export const Content = () => (
  <div className={styles.content}>
    <Switch>
      <Route path="/boards/:boardId" exact component={Board} />
      <Route path="/home" component={Home} />
      <Route
        path="/boards/:boardId/:columnId/:cardId"
        exact
        component={CardDetail}
      />
      <Redirect from="/boards/:boardId/:columnId" exact to="/boards/:boardId" />
      <Redirect from="/" to="/home" />
    </Switch>
  </div>
);
