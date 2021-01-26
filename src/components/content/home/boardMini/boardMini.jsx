import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeStatusFavorites, deleteBoard } from 'actions/boards';
import CloseIcon from '@material-ui/icons/Close';
import StarOutlineRoundedIcon from '@material-ui/icons/StarOutlineRounded';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import styles from './boardMini.scss';

export const BoardMini = ({ board = false }) => {
  const dispatch = useDispatch();
  const { id } = board;

  const setFavorites = () => {
    dispatch(changeStatusFavorites(id));
  };

  const handleDelete = () => {
    dispatch(deleteBoard(id));
  };

  return (
    <li className={styles.boardMini} key={id}>
      <Link to={`/ProjectManager/${id}`}>
        <div className="title">{board.title}</div>
      </Link>
      <button type="button" className="delete" onClick={handleDelete}>
        <CloseIcon />
      </button>
      <button type="button" className="favorites" onClick={setFavorites}>
        {board.favorites ? <StarRoundedIcon /> : <StarOutlineRoundedIcon />}
      </button>
    </li>
  );
};
