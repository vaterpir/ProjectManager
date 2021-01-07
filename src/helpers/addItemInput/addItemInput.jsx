import React, { useRef, useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import PaletteIcon from '@material-ui/icons/Palette';
import AddBoxIcon from '@material-ui/icons/AddBox';
import styles from './addItemInput.scss';

export const AddItemInput = ({ clasName = 'newBoard' }) => {
  const [valueInput, setValueInput] = useState('');
  const inputElement = useRef(null);
  console.log(clasName);

  const editValueInput = () => {
    setValueInput(inputElement.current.value);
  };

  const addItem = () => {
    console.log('click');
  };

  return (
    <div className={styles.addItem}>
      <TextareaAutosize
        className={`input ${clasName}`}
        ref={inputElement}
        type="text"
        name="newBoard"
        id="newBoardInput"
        value={valueInput}
        onChange={editValueInput}
        placeholder="Новая доска"
      />
      <button type="button" className="button" onClick={addItem}>
        <AddBoxIcon />
      </button>
    </div>
  );
};
