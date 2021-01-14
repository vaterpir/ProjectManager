import React, { useState } from 'react';
import { TitleInput } from 'helpers/titleInput';
import { useHistory } from 'react-router-dom';
import styles from './cardMini.scss';

export const CardMini = ({ cardId = '123', title = '' }) => {
  const [titleCard, setTitleCard] = useState(title);

  const history = useHistory();

  const openCard = () => {
    history.push(`/card_detail/${cardId}`);
  };

  return (
    <div className={styles.card}>
      <div className="wrapper-card">
        <TitleInput
          name={titleCard}
          setTitle={setTitleCard}
          openLink={openCard}
        />
      </div>
    </div>
  );
};
