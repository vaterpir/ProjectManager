import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import styles from './header.scss';

export const Header = () => (
  <div className={styles.header}>
    <div className="linkHeder">
      <Link to="/#home">
        <div className="title">
          <HomeIcon />
          <h3>Доски</h3>
        </div>
      </Link>
    </div>
  </div>
);
