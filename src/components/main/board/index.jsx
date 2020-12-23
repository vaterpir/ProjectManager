import React, { useEffect, useState } from 'react';
import { deleteBoard } from 'actions';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from './card';
import styles from './board';
import { changeInputOnFocus, changeTitleBoard } from '../../../actions';
import { AddCard } from './addCard';

export const Board = ({ boardId = '', title = '' }) => {
  const dispatch = useDispatch();
  const inputOnFocus = useSelector((state) => state.inputOnFocus);
  const cards = useSelector((state) => state.cards);

  const [titleBoard, setTitleBoard] = useState(title);
  const [switchButtonEdit, setSwitchButtonEdit] = useState(true);

  const handleDeleteBoard = () => dispatch(deleteBoard(boardId));

  const handleChangeValueTitle = (event) => {
    setTitleBoard(event.target.value);
  };

  const handleSaveTitleBoard = () => {
    if (titleBoard.split(' ').join('')) {
      dispatch(changeTitleBoard(boardId, titleBoard));
    }
    setSwitchButtonEdit(true);
    document.getElementById(`${boardId}_board_title`).blur();
  };

  const handleCanselTitleBoard = () => {
    setTitleBoard(title);
    dispatch(changeInputOnFocus(''));
  };

  const handlePressKey = (event) => {
    if (event.which === 13) {
      handleSaveTitleBoard();
    }
    if (event.which === 27) {
      handleCanselTitleBoard();
    }
  };

  const handleEditTitleBoard = () => {
    dispatch(changeInputOnFocus(`${boardId}_board_title`));
    setSwitchButtonEdit(false);
  };

  useEffect(() => {
    if (inputOnFocus === `${boardId}_board_title`) {
      document.getElementById(`${boardId}_board_title`).focus();
    } else {
      setSwitchButtonEdit(true);
      setTitleBoard(title);
    }
  });

  return (
    <div className={styles.board}>
      <div className="header">
        <div className="wrapper-title">
          <input
            type="text"
            className="titleBoard"
            id={`${boardId}_board_title`}
            value={titleBoard}
            onChange={handleChangeValueTitle}
            onKeyDown={handlePressKey}
            onBlur={handleCanselTitleBoard}
            disabled={!(inputOnFocus === `${boardId}_board_title`)}
          />
        </div>

        {switchButtonEdit ? (
          <button
            type="button"
            className="edit"
            onMouseDown={handleEditTitleBoard}
          >
            E
          </button>
        ) : (
          <button
            type="button"
            className="edit"
            onMouseDown={handleSaveTitleBoard}
          >
            V
          </button>
        )}
        <button type="button" className="edit" onClick={handleDeleteBoard}>
          X
        </button>
      </div>
      <div className="cards-list">
        <AddCard boardId={boardId} />
        {cards
          .filter((card) => card.parent === boardId)
          .map((card) => (
            <Card
              key={card.id}
              title={card.title}
              cardId={card.id}
              labels={card.labels}
            />
          ))}
      </div>
    </div>
  );
};
