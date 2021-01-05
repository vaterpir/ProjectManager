import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './addCard';

export const AddCard = ({ boardId = '' }) => {
  const [newTitleCard, setNewTitleCard] = useState('');
  const dispatch = useDispatch();

  const handleChangeTitleCard = ({ target }) => {
    setNewTitleCard(target.value);
  };

  const handleAddCard = () => {
    if (newTitleCard.split(' ').join('')) {
      dispatch(addCard(newTitleCard, boardId));
    }
    setNewTitleCard('');
  };

  return (
    <div className={styles.addCard}>
      <div className="wrapper">
        <input
          type="text"
          name="addCard"
          id="addCard"
          className="newCard"
          value={newTitleCard}
          onChange={handleChangeTitleCard}
          placeholder="Добавить карточку "
        />
        <button type="button" className="add-button" onClick={handleAddCard}>
          +
        </button>
      </div>
    </div>
  );
};
