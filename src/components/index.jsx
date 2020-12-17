import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBord, addCard } from '../actions';
import styles from './app';

const Card = ({ title = '', cardId = '' }) => {
  return (
    <div className="cards" key={cardId}>
      {title}
    </div>
  );
};

const Board = ({ title = '', boardId = '' }) => {
  const [valueInputCard, setValueInputCard] = useState('');
  const cards = useSelector((state) => state.cards);
  const dispatch = useDispatch();

  const changeValueInputCard = ({ target }) => {
    setValueInputCard(target.value);
  };

  const handleAddCard = (parentId) => () => {
    if (valueInputCard) {
      dispatch(addCard(valueInputCard, parentId));
    }
    setValueInputCard('');
  };

  return (
    <div className="boards" key={boardId}>
      <h3>{title}</h3>
      <div>
        <input
          type="text"
          placeholder="new card"
          onChange={changeValueInputCard}
          value={valueInputCard}
        />
        <button
          type="button"
          className="btnAddCard"
          onClick={handleAddCard(boardId)}
        >
          add card
        </button>
        {cards
          .filter((card) => boardId === card.parent)
          .map((card) => (
            <Card key={card.id} cardId={card.id} title={card.title} />
          ))}
      </div>
    </div>
  );
};

export const App = () => {
  const boards = useSelector((state) => state.boards);
  const dispatch = useDispatch();

  const handleAddBoard = () => {
    dispatch(addBord('new title'));
  };

  return (
    <div className={styles.app}>
      {boards.map((board) => (
        <Board key={board.id} boardId={board.id} title={board.title} />
      ))}

      <button onClick={handleAddBoard} type="button">
        add board
      </button>
    </div>
  );
};
