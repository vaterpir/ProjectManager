import React from 'react';

import Image2 from 'Image/search.svg';
import styles from './header';

export const Header = () => (
  <header className={styles.header}>
    <h1 className="title"> </h1>
    <Image2 fill="#333" />
  </header>
);
