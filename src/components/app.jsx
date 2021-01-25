import React from 'react';
import styles from './app.scss';
import { Content } from './content/content';
import { Header } from './header/header';

export const App = () => (
  <div className={styles.app}>
    <Header />
    <Content />
  </div>
);
