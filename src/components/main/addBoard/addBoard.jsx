import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddItemInput } from 'helpers/addItemInput';
import styles from './addBoard.scss';

export const AddBoard = () => {
  const [newTitleBoard, setNewTitleBoard] = useState('');
  const dispatch = useDispatch();

  return (
    <div className={styles.addBoard}>
      <AddItemInput />
    </div>
  );
};
