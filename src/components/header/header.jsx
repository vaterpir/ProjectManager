import React from 'react';
import { Link } from 'react-router-dom';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import styles from './header.scss';

export const Header = () => (
  <div className={styles.header}>
    <div className="linkHeder">
      <Link to="/home">
        <div className="title">
          <ViewModuleIcon />
          <h3>Доски</h3>
        </div>
      </Link>
    </div>
  </div>
);
