/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';
import TextareaAutosize from 'react-textarea-autosize';
import styles from './home.scss';

export const Home = () => {
  const boards = useSelector((state) => state.boards);
  const [valueInput, setValueInput] = useState('');
  const inputElement = useRef(null);

  const editValueInput = () => {
    setValueInput(inputElement.current.value);
  };

  return (
    <div className={styles.home}>
      <div className="content">
        <div className="header">
          <h2>Ваши доски</h2>
        </div>
        <ul className="list">
          {Object.entries(boards).map(([id, content]) => (
            <li className="preview" key={id}>
              <Link to={`/boards/${id}`}>
                <div className="title">{content.title}</div>
              </Link>
              <button type="button" className="delete">
                <CloseIcon />
              </button>
            </li>
          ))}
          <li className="addBoard">
            <TextareaAutosize
              type="text"
              ref={inputElement}
              value={valueInput}
              onChange={editValueInput}
              className="input "
              placeholder="Введите название доски"
            />
            <button type="button" className="add">
              <AddIcon />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
