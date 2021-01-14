import React, { useState } from 'react';
import { editTitleBoard, deleteBoard } from 'actions/boards';
import { TitleInput } from 'helpers/titleInput';
import { CardMini } from './cardMini';
import styles from './board.scss';
import { AddCard } from './addCard';

export const Board = ({ boardId = '', title = '' }) => {
  const [titleBoard, setTitleBoard] = useState(title);

  return (
    <div className={styles.board}>
      <div className="header">
        <TitleInput
          setTitle={setTitleBoard}
          name={titleBoard}
          actionEdit={editTitleBoard}
          actionDelete={deleteBoard}
          parentId={boardId}
          clasName="boardTitle"
        />
      </div>

      <div className="cards-list">
        <CardMini />
        <CardMini />
        <CardMini />
        <CardMini />
        <CardMini />
        <CardMini />
        <CardMini />
        <CardMini />
        <CardMini />
        <CardMini />
        <CardMini />
        <CardMini />
        <CardMini />
        <CardMini />
        <CardMini />
        <CardMini />
        <CardMini />
        <CardMini />
        <CardMini />
        <CardMini />
        <CardMini />
        <CardMini />
        <CardMini />
        <CardMini />
        <CardMini />
        <div className="footer">
          <AddCard boardId={boardId} />
        </div>
      </div>
    </div>
  );
};
