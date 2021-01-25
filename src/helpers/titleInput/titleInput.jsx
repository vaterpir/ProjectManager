import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';
import DoneRoundedIcon from '@material-ui/icons/DoneRounded';
import TextareaAutosize from 'react-textarea-autosize';
import classNames from 'classnames';
import styles from './titleInput.scss';

export const CustomInputTitle = ({
  element = {},
  actionEdit = false,
  actionDelete = false,
  actiondeleteChild = false,
  url = '#',
  linkUrl = '#',
  valueInput = 'title',
}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const titleInput = useRef(null);
  const [value, setValue] = useState(element[valueInput]);
  const [disableInput, setDisableInput] = useState(true);

  const changeTitle = () => {
    if (!disableInput) {
      setValue(titleInput.current.value);
    }
  };

  const saveNewTitle = (blur) => (event) => {
    event.stopPropagation();
    if (value && !disableInput) {
      const { id } = element;
      dispatch(actionEdit(id, value));
      setDisableInput(true);
    } else if (disableInput && !blur) {
      setDisableInput(false);
      titleInput.current.focus();
    } else {
      setValue(element[valueInput]);
      setDisableInput(true);
    }
  };

  const handleDelete = () => {
    const { id, parent } = element;
    dispatch(actionDelete(id, parent));
    if (actiondeleteChild) dispatch(actiondeleteChild(id, parent));
    history.push(url);
  };

  const handleClickOnLink = (event) => {
    if (disableInput) {
      history.push(linkUrl);
      return;
    }
    event.stopPropagation();
  };

  return (
    <div className={styles.title}>
      <TextareaAutosize
        ref={titleInput}
        type="text"
        value={value}
        onChange={changeTitle}
        className={classNames('input', { disabled: disableInput })}
        onBlur={saveNewTitle(true)}
        onClick={handleClickOnLink}
      />
      <button
        type="button"
        className={classNames('changeTitle', { noDelete: !actionDelete })}
        onClick={saveNewTitle(false)}
      >
        {disableInput ? (
          <EditIcon className="editIcon" />
        ) : (
          <DoneRoundedIcon className="saveIcon" />
        )}
      </button>
      {valueInput === 'description' ? (
        ''
      ) : (
        <button type="button" className="delete" onClick={handleDelete}>
          <ClearRoundedIcon className="deleteIcon" />
        </button>
      )}
    </div>
  );
};
