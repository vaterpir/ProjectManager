import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from './card';

import styles from './column.scss';

export const Column = ({ id = '' }) => {
  const column = useSelector((state) => state.columns[id]);

  return (
    <div className={styles.column}>
      <div className="header">{column?.title}</div>
      <div className="content">
        <div className="list">
          {column?.childs.map((card) => (
            <Card key={card} id={card} />
          ))}
        </div>
      </div>
    </div>
  );
};
