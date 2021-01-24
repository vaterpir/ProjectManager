import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneOutlineRoundedIcon from '@material-ui/icons/DoneOutlineRounded';
import classNames from 'classnames';
import styles from './titleInput.scss';

export const CustomInputTitle = ({
  element = {},
  actionEdit = {},
  actionDelete = {},
  actiondeleteChild = false,
  url = '',
}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const titleInput = useRef(null);
  const [value, setValue] = useState(element?.title);
  const [disableInput, setDisableInput] = useState(true);

  const changeTitle = () => {
    if (!disableInput) {
      setValue(titleInput.current.value);
    }
  };

  const saveNewTitle = (blur) => () => {
    if (value && !disableInput) {
      const { id } = element;
      dispatch(actionEdit(id, value));
      setDisableInput(true);
    } else if (disableInput && !blur) {
      setDisableInput(false);
      titleInput.current.focus();
    } else {
      setValue(element?.title);
      setDisableInput(true);
    }
  };

  const handleDelete = () => {
    const { id, parent } = element;
    dispatch(actionDelete(id, parent));
    if (actiondeleteChild) dispatch(actiondeleteChild(id, parent));
    history.push(url);
  };

  return (
    <div className={styles.title}>
      <input
        ref={titleInput}
        type="text"
        value={value}
        onChange={changeTitle}
        className={classNames('input', { disabled: disableInput })}
        onBlur={saveNewTitle(true)}
      />
      <button
        type="button"
        className="changeTitle"
        onClick={saveNewTitle(false)}
      >
        {disableInput ? (
          <EditIcon className="editIcon" />
        ) : (
          <DoneOutlineRoundedIcon className="saveIcon" />
        )}
      </button>
      <button type="button" className="delete" onClick={handleDelete}>
        <DeleteIcon className="deleteIcon" />
      </button>
    </div>
  );
};
/* <SaveIcon className="saveIcon" /> */
