import React from 'react';
import { CustomInputTitle } from 'helpers/titleInput';
import { useSelector } from 'react-redux';
import { deleteCard, editTitleCard } from 'actions/cards';
import { deleteChildColumn } from 'actions/columns';
import { useParams } from 'react-router-dom';
import styles from './card.scss';

export const Card = ({ id = '' }) => {
  const card = useSelector((state) => state.cards[id]);
  const { boardId } = useParams();
  return (
    <div className={styles.card}>
      <div type="button" className="linkCard">
        <CustomInputTitle
          element={card}
          actionEdit={editTitleCard}
          actionDelete={deleteCard}
          actiondeleteChild={deleteChildColumn}
          url={false}
          linkUrl={`/boards/${boardId}/${card.parent}/${id}`}
        />
      </div>
    </div>
  );
};
