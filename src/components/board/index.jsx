import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCard } from '../../actions';
import { Card } from './card';

export const Board = ({ title = '', boardId = '' }) => {
  const [valueInputCard, setValueInputCard] = useState('');
  const [valueTitle, setValueTitle] = useState(title);
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

  const changeValueTitleBoard = ({ target }) => {
    setValueTitle(target.value);
  };

  return (
    <div className="boards" key={boardId}>
      <input
        type="text"
        name=""
        id=""
        value={valueTitle}
        className="title"
        onChange={changeValueTitleBoard}
      />
      <div>
        <div className="cards">
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
        </div>
        {cards
          .filter((card) => boardId === card.parent)
          .map((card) => (
            <Card key={card.id} cardId={card.id} title={card.title} />
          ))}
      </div>
    </div>
  );
};
