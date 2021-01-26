import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Board } from './board';
import { Home } from './home';
import { CardDetail } from './cardDetail';
import styles from './content.scss';

export const Content = () => (
  <div className={styles.content}>
    <Switch>
      <Route path="/ProjectManager/:boardId" exact component={Board} />
      <Route path="/ProjectManager" exact component={Home} />
      <Route
        path="/ProjectManager/:boardId/:columnId/:cardId"
        exact
        component={CardDetail}
      />
      <Redirect
        from="/ProjectManager/:boardId/:columnId"
        to="/ProjectManager/:boardId"
      />
      <Redirect from="" to="/ProjectManager" />
    </Switch>
  </div>
);
