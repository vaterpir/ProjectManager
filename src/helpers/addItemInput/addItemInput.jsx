import React, { useRef, useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import AddBoxIcon from '@material-ui/icons/AddBox';
import styles from './addItemInput.scss';

export const AddItemInput = ({ clasName = '' }) => {
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
        className="input "
        ref={inputElement}
        type="text"
        value={valueInput}
        onChange={editValueInput}
        placeholder="Введите название доски"
      />
      <button type="button" className="button" onClick={addItem}>
        <AddBoxIcon />
      </button>
    </div>
  );
};
