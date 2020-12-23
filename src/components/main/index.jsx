import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Board } from './board';
import styles from './main';

export const Main = () => {
  const boards = useSelector((state) => state.boards);
  const [focusOnInput, setFocusOnInput] = useState('');
  return (
    <div className={styles.main}>
      <div className="content">
        <div className="board-list">
          {boards.map((board) => (
            <Board
              key={board.id}
              boardId={board.id}
              title={board.title}
              focusOnInput={focusOnInput === board.id}
              setFocusOnInput={setFocusOnInput}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
