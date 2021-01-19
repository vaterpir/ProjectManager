import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteBoard, editTitleBoard } from '../../../actions/boards';
import styles from './board.scss';
import { Column } from './column';

export const Board = () => {
  const { id: boardID } = useParams();
  const board = useSelector((state) => state.boards[boardID]);
  const dispatch = useDispatch();
  const history = useHistory();

  const titleInput = useRef(null);
  const [disableInput, setDisableInput] = useState(true);
  const [title, setTitle] = useState(board?.title);

  const changeTitle = () => {
    setTitle(titleInput.current.value);
  };

  const saveNewTitle = () => {
    if (title) {
      const { id } = board;
      dispatch(editTitleBoard(id, title));
      setDisableInput(!disableInput);
    }
  };

  const handleDelete = () => {
    const { id } = board;
    dispatch(deleteBoard(id));
    history.push('/home');
  };

  return board ? (
    <div className={styles.board}>
      <div className="header">
        <input
          ref={titleInput}
          type="text"
          value={title}
          onChange={changeTitle}
          className="title"
          disabled={disableInput}
          onBlur={saveNewTitle}
        />
        <button
          type="button"
          className="changeTitle"
          onMouseDown={saveNewTitle}
        >
          {disableInput ? (
            <EditIcon className="edit" />
          ) : (
            <SaveIcon className="save" />
          )}
        </button>
        <button type="button" onClick={handleDelete}>
          <DeleteIcon className="delete" />
        </button>
      </div>
      <div className="content">
        {board.childs?.map((child) => (
          <Column key={child} id={child} />
        ))}
      </div>
    </div>
  ) : (
    <h2 className={styles.error}>ERROR: the page is missing</h2>
  );
};
