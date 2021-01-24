import React, { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
/* import AddIcon from '@material-ui/icons/Add'; */
import { useDispatch } from 'react-redux';
import AddToPhotosOutlinedIcon from '@material-ui/icons/AddToPhotosOutlined';
import styles from './addItemInput.scss';

export const AddItemInput = ({
  element = '',
  actionAddChild = false,
  actionAddItem = false,
}) => {
  const dispatch = useDispatch();
  const titleInput = useRef(null);
  const [newTitle, setNewTitle] = useState('');

  const handleAddColumn = () => {
    const { id: boardID } = element;

    if (newTitle) {
      const newId = uuidv4();
      if (actionAddChild) dispatch(actionAddChild(newId, boardID));
      if (actionAddItem) dispatch(actionAddItem(newTitle, boardID, newId));
      setNewTitle('');
    }
  };

  const changeNewTitle = () => {
    setNewTitle(titleInput.current.value);
  };

  return (
    <div className={styles.newTitle}>
      <div className="wrapper-addItem">
        <input
          ref={titleInput}
          type="text"
          placeholder="Введите название"
          className="newtitle-input"
          value={newTitle}
          onChange={changeNewTitle}
        />
        <button
          type="button"
          className="newtitle-add"
          onClick={handleAddColumn}
        >
          <AddToPhotosOutlinedIcon />
          {/* <AddIcon /> */}
        </button>
      </div>
    </div>
  );
};
