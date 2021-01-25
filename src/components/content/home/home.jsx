/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';
import TextareaAutosize from 'react-textarea-autosize';
import StarOutlineRoundedIcon from '@material-ui/icons/StarOutlineRounded';

import StarRoundedIcon from '@material-ui/icons/StarRounded';
import styles from './home.scss';
import {
  addBoard,
  changeStatusFavorites,
  deleteBoard,
} from '../../../actions/boards';

export const Home = () => {
  const dispatch = useDispatch();
  const boards = useSelector((state) => state.boards);
  const [valueInput, setValueInput] = useState('');
  const [filter, setFilter] = useState(false);
  const inputElement = useRef(null);

  const editValueInput = () => {
    setValueInput(inputElement.current.value);
  };

  const handleDelete = (id) => () => {
    dispatch(deleteBoard(id));
  };

  const handleAdd = () => {
    setFilter(false);
    if (valueInput) {
      dispatch(addBoard(valueInput));
      setValueInput('');
    }
  };

  const setFavorites = (id) => () => {
    dispatch(changeStatusFavorites(id));
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
                return (
                  <li className="preview" key={id}>
                    <Link to={`/boards/${id}`}>
                      <div className="title">{board.title}</div>
                    </Link>
                    <button
                      type="button"
                      className="delete"
                      onClick={handleDelete(id)}
                    >
                      <CloseIcon />
                    </button>
                    <button
                      type="button"
                      className="favorites"
                      onClick={setFavorites(id)}
                    >
                      {board.favorites ? (
                        <StarRoundedIcon />
                      ) : (
                        <StarOutlineRoundedIcon />
                      )}
                    </button>
                  </li>
                );
              }
              if (filter && !board.favorites) return '';
              return (
                <li className="preview" key={id}>
                  <Link to={`/boards/${id}`}>
                    <div className="title">{board.title}</div>
                  </Link>
                  <button
                    type="button"
                    className="delete"
                    onClick={handleDelete(id)}
                  >
                    <CloseIcon />
                  </button>
                  <button
                    type="button"
                    className="favorites"
                    onClick={setFavorites(id)}
                  >
                    {board.favorites ? (
                      <StarRoundedIcon />
                    ) : (
                      <StarOutlineRoundedIcon />
                    )}
                  </button>
                </li>
              );
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

/*
(
            <li className="preview" key={id}>
              <Link to={`/boards/${id}`}>
                <div className="title">{board.title}</div>
              </Link>
              <button
                type="button"
                className="delete"
                onClick={handleDelete(id)}
              >
                <CloseIcon />
              </button>
              <button
                type="button"
                className="favorites"
                onClick={setFavorites(id)}
              >
                {board.favorites ? (
                  <StarRoundedIcon />
                ) : (
                  <StarOutlineRoundedIcon />
                )}
              </button>
            </li>
          )
*/
