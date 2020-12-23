import React from 'react';
import styles from './card';

export const Card = ({ title = '' }) => <div className={styles.card}>{title}</div>;
