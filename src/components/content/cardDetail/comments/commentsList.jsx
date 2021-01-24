import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { CustomInputTitle } from 'helpers/titleInput/titleInput';
import { AddItemInput } from 'helpers/addItemInput/addItemInput';
import { sortByDate } from 'helpers/sortByDate';
import { deleteCommentCard, addCommentCard } from 'actions/cards';
import { deleteComment, editTitleComment, addComment } from 'actions/comments';

import styles from './comments.scss';

export const CommentsList = () => {
  const { cardId } = useParams();
  const card = useSelector((state) => state.cards[cardId]);
  const commentsAll = useSelector((state) => state.comments);
  const { comments } = card;
  const commentsList = sortByDate(comments.map((task) => commentsAll[task]));

  return (
    <div className={styles.comments}>
      <div className="header-comments"> Комментарии: </div>
      <div className="add-comments">
        <AddItemInput
          element={card}
          actionAddChild={addCommentCard}
          actionAddItem={addComment}
        />
      </div>
      {commentsList.length ? (
        <div className="wrapper-comments">
          {commentsList.map((comment) => (
            <div key={comment?.id} className="title-comments">
              <CustomInputTitle
                element={comment}
                actionEdit={editTitleComment}
                actionDelete={deleteComment}
                actiondeleteChild={deleteCommentCard}
                url="#"
              />
              <div className="date-comments">
                {comment.date}
              </div>
            </div>
          ))}
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
