import React from 'react';
import { editDescriptiomCard } from '../../../../actions/cards';
import { CustomInputTitle } from '../../../../helpers/titleInput/titleInput';
import styles from './descriptionCard.scss';

export const DescriptionCard = ({ card = '' }) => (
  <div className={styles.desciptionCard}>
    <div className="description-header-card">
      <h3>Описание:</h3>
    </div>

    <div className="description-content-card">
      <CustomInputTitle
        element={card}
        actionEdit={editDescriptiomCard}
        valueInput="description"
      />
    </div>
  </div>
);
