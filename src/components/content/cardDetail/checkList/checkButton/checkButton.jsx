import React from 'react';
// eslint-disable-next-line max-len
import CheckBoxOutlineBlankRoundedIcon from '@material-ui/icons/CheckBoxOutlineBlankRounded';
import CheckBoxRoundedIcon from '@material-ui/icons/CheckBoxRounded';
import { useDispatch } from 'react-redux';

import { changeStatusTask } from 'actions/tasks';
import { useParams } from 'react-router-dom';
import styles from './checkButton.scss';

export const CheckButton = ({ checked = false, id = '' }) => {
  const dispatch = useDispatch();
  const { cardId } = useParams();

  const handleChecked = () => {
    dispatch(changeStatusTask(!checked, id, cardId));
  };

  return (
    <button
      type="button"
      className={styles.checkButton}
      onClick={handleChecked}
    >
      {checked ? <CheckBoxRoundedIcon /> : <CheckBoxOutlineBlankRoundedIcon />}
    </button>
  );
};
