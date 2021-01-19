/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import TextareaAutosize from 'react-textarea-autosize';
import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '@material-ui/icons/Edit';
import CheckIcon from '@material-ui/icons/Check';
import styles from './titleInput.scss';
// import { textWithoutSpaces } from '../textWithoutSpaces';

export const TitleInput = ({
  name = '',
  setTitle = '',
  actionEdit = {},
  actionDelete = {},
  parentId = '',
  openLink = false,
  clasName = '',
}) => {
  const dispatch = useDispatch();
  const [disabledInput, setDisabledInput] = useState(true);
  const inputText = useRef(null);

  useEffect(() => {
    if (!disabledInput) {
      inputText.current.focus();
    }
  });

  const saveInput = (event) => {
    event.stopPropagation();
    const notEmpty = true; // textWithoutSpaces(name);
    setDisabledInput(true);
    if (notEmpty) {
      dispatch(actionEdit());
      return;
    }
    setTitle(name);
  };

  const keyPress = (event) => {
    if (event.code === 'Enter' || event.code === 'NumpadEnter') {
      saveInput();
    } else if (event.code === 'Escape') {
      setTitle(name);
      inputText.current.blur();
    }
  };

  const editInput = (event) => {
    event.stopPropagation();
    if (disabledInput) {
      setDisabledInput(false);
    }
  };
  const deleteInput = (event) => {
    event.stopPropagation();
    dispatch(actionDelete(parentId));
  };

  // eslint-disable-next-line max-len
  const changeInput = (event) => (disabledInput ? name : setTitle(event.target.value));

  const clickOnInput = () => {
    if (disabledInput && openLink) {
      openLink();
    }
  };

  return (
    <form className={styles.title}>
      <TextareaAutosize
        type="text"
        className={classNames('input', { disabledLink: disabledInput }, clasName)}
        ref={inputText}
        onBlur={saveInput}
        value={name}
        onKeyDown={keyPress}
        onChange={changeInput}
        onMouseDown={(event) => {
          if (disabledInput) {
            event.stopPropagation();
            event.preventDefault();
          }
        }}
        onClick={clickOnInput}
        placeholder="Без имени"
      />
      <div className="buttons">
        <button
          type="button"
          className={classNames('button')}
          onMouseDown={editInput}
        >
          {disabledInput ? (
            <EditIcon className="edit" />
          ) : (
            <CheckIcon className="check" />
          )}
        </button>
        <button
          type="button"
          className={classNames('button', 'delete')}
          onClick={deleteInput}
        >
          <CloseIcon className="delete" />
        </button>
      </div>
    </form>
  );
};

/*
 */
