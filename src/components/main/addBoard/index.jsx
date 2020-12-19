import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBoard } from 'actions';
import styles from './addBoard';

export const AddBoard = () => {
  const [newNameBoard, setNewNameBoard] = useState('');
  const dispatch = useDispatch();

  const changeNameBoard = ({ target }) => {
    setNewNameBoard(target.value);
  };

  const handleAddBoard = () => {
    dispatch(addBoard(newNameBoard));
  };

  return (
    <div className={styles.addBoard}>
      <input
        type="text"
        name="newBoard"
        id="newBoardInput"
        value={newNameBoard}
        onChange={changeNameBoard}
      />
      <button type="button" onClick={handleAddBoard}>
        + board
      </button>
    </div>
  );
};
