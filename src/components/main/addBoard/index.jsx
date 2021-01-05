import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddItemInput } from 'helpers/addItemInput';
import styles from './addBoard';

export const AddBoard = () => {
  const [newTitleBoard, setNewTitleBoard] = useState('');
  const dispatch = useDispatch();

  const changeTitleBoard = ({ target }) => {
    setNewTitleBoard(target.value);
  };

  const handleAddBoard = () => {
    if (newTitleBoard.split(' ').join('')) {
      dispatch(addBoard(newTitleBoard));
    }
    setNewTitleBoard('');
  };

  return (
    <div className={styles.addBoard}>
      <AddItemInput />
      {/*       <input
        type="text"
        name="newBoard"
        id="newBoardInput"
        value={newTitleBoard}
        onChange={changeTitleBoard}
      />
      <button type="button" onClick={handleAddBoard}>
        + board
      </button> */}
    </div>
  );
};
