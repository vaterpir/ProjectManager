import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { editTitleBoard, deleteBoard } from 'actions/boards';
import { TitleInput } from 'helpers/titleInput';
import { CardMini } from './cardMini';
import styles from './board';
import { AddCard } from './addCard';
import { AddItemInput } from '../../../helpers/addItemInput/addItemInput';

export const Board = ({ boardId = '', title = '' }) => {
  const cards = useSelector((state) => state.cards);
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
        />
      </div>
      <AddCard boardId={boardId} />

      <CardMini />
      {/*       <div className="cards-list">
        {Object.entries(cards)
          .filter(([cardId, card]) => card.parent === boardId)}
      </div> */}
    </div>
  );
};
