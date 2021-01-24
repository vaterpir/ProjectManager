import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { CustomInputTitle } from 'helpers/titleInput';
import { deleteCard, editTitleCard } from 'actions/cards';
import { deleteChildColumn } from 'actions/columns';
import { DescriptionCard } from './descriptionCard';
import { CheckList } from './checkList';
import styles from './cardDetail.scss';
import { CommentsList } from './comments';

export const CardDetail = () => {
  const { cardId, boardId } = useParams();
  const card = useSelector((state) => state.cards[cardId]);
  return (
    <div className={styles.cardDetail}>
      <div className="header-card">
        <CustomInputTitle
          element={card}
          actionEdit={editTitleCard}
          actionDelete={deleteCard}
          actiondeleteChild={deleteChildColumn}
          url={`/boards/${boardId}`}
        />
      </div>
      <div className="content-card">
        <DescriptionCard description={card?.description} />
        <CheckList />
        <CommentsList />
      </div>
    </div>
  );
};
