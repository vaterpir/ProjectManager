import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addChecklist } from 'actions';
import styles from './addChecklist';

export const AddChecklist = ({ cardId = '' }) => {
  const [titleChecklist, setTitleChecklist] = useState('');

  const dispatch = useDispatch();
  const handleAddChecklist = () => {
    if (titleChecklist.split(' ').join('')) {
      dispatch(addChecklist(titleChecklist, cardId));
      setTitleChecklist('');
    }
  };
  const handleChangeTitleChecklist = (event) => {
    setTitleChecklist(event.target.value);
  };

  return (
    <div className={styles.addChecklist}>
      <div className="addChecklist-input">
        <input
          type="text"
          id="AddChecklistInput"
          value={titleChecklist}
          onChange={handleChangeTitleChecklist}
        />
      </div>
      <button
        type="button"
        className="addChecklist-button"
        onClick={handleAddChecklist}
      >
        Добавить ч/л
      </button>
    </div>
  );
};
