import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { CustomInputTitle } from 'helpers/titleInput';
import { deleteCard, editTitleCard } from 'actions/cards';
import { deleteChildColumn } from 'actions/columns';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import { DescriptionCard } from './descriptionCard';
import { CheckList } from './checkList';
import styles from './cardDetail.scss';
import { CommentsList } from './comments';

export const CardDetail = () => {
  const { cardId, boardId } = useParams();
  const card = useSelector((state) => state.cards[cardId]);
  const history = useHistory();

  const handleBack = () => {
    history.push(`/boards/${boardId}`);
  };

  return (
    <div className={styles.cardDetail}>
      <div className="header-card">
        <button type="button" className="btn-back" onClick={handleBack}>
          <ArrowBackRoundedIcon />
        </button>
        <CustomInputTitle
          element={card}
          actionEdit={editTitleCard}
          actionDelete={deleteCard}
          actiondeleteChild={deleteChildColumn}
          url={`/boards/${boardId}`}
        />
      </div>
      <div className="content-card">
        <DescriptionCard card={card} />
        <CheckList />
        <CommentsList />
      </div>
    </div>
  );
};
