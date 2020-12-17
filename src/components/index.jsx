import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBord } from '../actions';
import styles from './app';
import { Board } from './board';

export const App = () => {
  const [nameNewBoardInput, setnameNewBoardInput] = useState('');
  const boards = useSelector((state) => state.boards);
  const dispatch = useDispatch();

  const handleAddBoard = () => {
    if (nameNewBoardInput) {
      dispatch(addBord(nameNewBoardInput));
      setnameNewBoardInput('');
    }
  };
  const changeValueInputBoard = ({ target }) => {
    setnameNewBoardInput(target.value);
  };

  return (
    <div className={styles.app}>
      <div className="boards">
        <input
          type="text"
          value={nameNewBoardInput}
          onChange={changeValueInputBoard}
        />
        <button onClick={handleAddBoard} type="button" className="btnAddCard">
          add board
        </button>
      </div>
      {boards.map((board) => (
        <Board key={board.id} boardId={board.id} title={board.title} />
      ))}
    </div>
  );
};
