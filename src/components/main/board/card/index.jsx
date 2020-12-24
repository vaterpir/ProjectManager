import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { changeTitleCard, changeInputOnFocus, deleteCard } from 'actions';
import colorLabel from 'styles';
import styles from './card';

export const Card = ({ cardId = '', title = '', labels = [] }) => {
  const dispatch = useDispatch();
  // eslint-disable-next-line max-len
  const inputOnFocus = useSelector((state) => state.inputOnFocus) === `${cardId}_card_title`;
  const labelsAll = useSelector((state) => state.labels);
  const [titleCard, setTitleCard] = useState(title);
  const [switchButtonEdit, setSwitchButtonEdit] = useState(true);

  const handleDeleteCard = () => dispatch(deleteCard(cardId));

  const handleChangeValueTitle = (event) => {
    setTitleCard(event.target.value);
  };

  const handleSaveTitleCard = () => {
    if (titleCard.split(' ').join('')) {
      dispatch(changeTitleCard(cardId, titleCard));
    }
    setSwitchButtonEdit(true);
    document.getElementById(`${cardId}_card_title`).blur();
  };

  const handleCanselTitleCard = () => {
    setTitleCard(title);
    dispatch(changeInputOnFocus(''));
  };

  const handlePressKey = (event) => {
    if (event.which === 13) {
      handleSaveTitleCard();
    }
    if (event.which === 27) {
      handleCanselTitleCard();
    }
  };

  const handleEditTitleCard = () => {
    dispatch(changeInputOnFocus(`${cardId}_card_title`));
    setSwitchButtonEdit(false);
  };

  useEffect(() => {
    if (inputOnFocus) {
      document.getElementById(`${cardId}_card_title`).focus();
    } else {
      setSwitchButtonEdit(true);
      setTitleCard(title);
    }
  });

  return (
    <div className={styles.card}>
      <div className="wrapper-title">
        {!inputOnFocus ? (
          <Link className="link" to={`/profileCard/${cardId}`}>
            <input
              type="text"
              className="titleCard"
              id={`${cardId}_card_title`}
              value={titleCard}
              onChange={handleChangeValueTitle}
              onKeyDown={handlePressKey}
              onBlur={handleCanselTitleCard}
              disabled={!inputOnFocus}
            />
          </Link>
        ) : (
          <input
            type="text"
            className="titleCard"
            id={`${cardId}_card_title`}
            value={titleCard}
            onChange={handleChangeValueTitle}
            onKeyDown={handlePressKey}
            onBlur={handleCanselTitleCard}
            disabled={!inputOnFocus}
          />
        )}
        <div className="wrapper-colorLabel">
          {labelsAll
            .filter((label) => labels.indexOf(label.id) !== -1)
            .map((label) => (
              <div
                className={classNames(
                  colorLabel[label.className],
                  'colorLabel',
                )}
                key={`${label.id}_card_label`}
              >
                {label.text}
              </div>
            ))}
        </div>
      </div>
      {switchButtonEdit ? (
        <button
          type="button"
          className="edit"
          onMouseDown={handleEditTitleCard}
        >
          E
        </button>
      ) : (
        <button
          type="button"
          className="edit"
          onMouseDown={handleSaveTitleCard}
        >
          V
        </button>
      )}
      <button type="button" className="edit" onClick={handleDeleteCard}>
        X
      </button>
    </div>
  );
};
