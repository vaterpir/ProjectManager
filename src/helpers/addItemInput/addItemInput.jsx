import React, { useRef, useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import AddBoxIcon from '@material-ui/icons/AddBox';
import PaletteIcon from '@material-ui/icons/Palette';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import styles from './addItemInput.scss';

export const AddItemInput = ({ clasName = 'newBoard' }) => {
  const [valueInput, setValueInput] = useState('');
  const inputElement = useRef(null);
  console.log(clasName);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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

      <button type="button" className="button color" onClick={handleClick}>
        <PaletteIcon />
      </button>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
      <button type="button" className="button add" onClick={addItem}>
        <AddBoxIcon />
      </button>
    </div>
  );
};
