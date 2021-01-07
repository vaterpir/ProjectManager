import React, { useState } from 'react';
import { editTitleBoard, deleteBoard } from 'actions/boards';
import { TitleInput } from 'helpers/titleInput';
import { CardMini } from './cardMini';
import styles from './board';
import { AddCard } from './addCard';

export const Board = ({ boardId = '', title = '' }) => {
  const [titleBoard, setTitleBoard] = useState(title);

  return (
    <div className={styles.board}>
      <div className="wrapper">
        <TitleInput
          setTitle={setTitleBoard}
          name={titleBoard}
          actionEdit={editTitleBoard}
          actionDelete={deleteBoard}
          parentId={boardId}
          clasName="boardTitle"
        />
      </div>

      <AddCard boardId={boardId} />

      <CardMini />
      <CardMini />
      <CardMini />
      <CardMini />
      <CardMini />
    </div>
  );
};
