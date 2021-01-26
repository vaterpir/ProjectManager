/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddIcon from '@material-ui/icons/Add';
import TextareaAutosize from 'react-textarea-autosize';
import StarOutlineRoundedIcon from '@material-ui/icons/StarOutlineRounded';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import { addBoard } from 'actions/boards';
import { BoardMini } from './boardMini';
import styles from './home.scss';

export const Home = () => {
  const dispatch = useDispatch();
  const boards = useSelector((state) => state.boards);
  const [valueInput, setValueInput] = useState('');
  const [filter, setFilter] = useState(false);
  const inputElement = useRef(null);

  const editValueInput = () => {
    setValueInput(inputElement.current.value);
  };

  const handleAdd = () => {
    setFilter(false);
    if (valueInput) {
      dispatch(addBoard(valueInput));
      setValueInput('');
    }
  };

  const filterFavorites = () => {
    setFilter(!filter);
  };

  return (
    <div className={styles.home}>
      <div className="content">
        <div className="header">
          <h2>Ваши доски</h2>
          <button
            type="button"
            className="filter-favorites"
            onClick={filterFavorites}
          >
            {filter ? <StarRoundedIcon /> : <StarOutlineRoundedIcon />}
          </button>
        </div>
        <div className="wrapper-list">
          <ul className="list">
            {Object.entries(boards).map(([id, board]) => {
              if (filter && board.favorites) {
                return <BoardMini key={id} board={board} />;
              }
              if (filter && !board.favorites) return '';
              return <BoardMini key={id} board={board} />;
            })}
            <li className="addBoard">
              <TextareaAutosize
                type="text"
                ref={inputElement}
                value={valueInput}
                onChange={editValueInput}
                className="input"
                placeholder="Введите название доски"
              />
              <button type="button" className="add" onClick={handleAdd}>
                <AddIcon />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
