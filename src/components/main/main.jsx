import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Board } from './board';
import styles from './main.scss';
import { AddItemInput } from '../../helpers/addItemInput/addItemInput';

export const Main = () => {
  const boards = useSelector((state) => state.boards);
  const [focusOnInput, setFocusOnInput] = useState('');
  return (
    <div className={styles.main}>
      <div className="content">
        <div className="board-list">
          {Object.entries(boards).map(([boardId, board]) => (
            <Board
              key={boardId}
              boardId={boardId}
              title={board.title}
              focusOnInput={focusOnInput === board.id}
              setFocusOnInput={setFocusOnInput}
            />
          ))}
          <AddItemInput />
        </div>
      </div>
    </div>
  );
};
