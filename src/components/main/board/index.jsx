import React, { useEffect, useState } from 'react';
import { deleteBoard } from 'actions';
import { useDispatch, useSelector } from 'react-redux';
import styles from './board';
import { changeInputOnFocus, changeTitleBoard } from '../../../actions';

export const Board = ({ boardId = '', title = '' }) => {
  const dispatch = useDispatch();
  const inputOnFocus = useSelector((state) => state.inputOnFocus);

  const [titleBoard, setTitleBoard] = useState(title);
  const [switchButtonEdit, setSwitchButtonEdit] = useState(true);

  const handleDeleteBoard = () => dispatch(deleteBoard(boardId));
  const handleChangeValueTitle = (event) => {
    setTitleBoard(event.target.value);
  };

  const saveTitleBoard = () => {
    dispatch(changeTitleBoard(boardId, titleBoard));
    setSwitchButtonEdit(true);
    document.getElementById(`${boardId}_board_title`).blur();
  };

  const canselTitleBoard = () => {
    setTitleBoard(title);
    dispatch(changeInputOnFocus(''));
  };

  const listenerPressKey = (event) => {
    if (event.which === 13) {
      saveTitleBoard();
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
      <input
        className="title"
        id={`${boardId}_board_title`}
        value={titleBoard}
        onChange={handleChangeValueTitle}
        onKeyDown={listenerPressKey}
        onBlur={canselTitleBoard}
        disabled={!(inputOnFocus === `${boardId}_board_title`)}
      />

      {switchButtonEdit ? (
        <button
          type="button"
          className="edit"
          onMouseDown={handleEditTitleBoard}
        >
          E
        </button>
      ) : (
        <button type="button" className="edit" onMouseDown={saveTitleBoard}>
          V
        </button>
      )}
      <input
        type="button"
        className="edit"
        onClick={handleDeleteBoard}
        value="X"
      />
    </div>
  );
};
