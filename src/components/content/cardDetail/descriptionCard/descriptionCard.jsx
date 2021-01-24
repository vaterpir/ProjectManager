import React from 'react';
import styles from './descriptionCard.scss';

export const DescriptionCard = ({ description = '' }) => (
  <div className={styles.desciptionCard}>
    <div className="description-header-card">Описание:</div>
    <div className="description-content-card">{description}</div>
  </div>
);
