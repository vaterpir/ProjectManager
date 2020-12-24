import { v4 as uuidv4 } from 'uuid';
import {
  ADD_CARD,
  TYPE_CARD,
  DELETE_CARD,
  CHANGE_TITLE_CARD,
} from '../../constants';

const initialState = [
  {
    id: 'card 1',
    type: TYPE_CARD,
    title: 'card 1',
    description: 'description card',
    labels: ['id label', 'id label1'],
    date: new Date(),
    parent: 'board1',
  },
];

export const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD: {
      const card = {
        id: uuidv4(),
        type: TYPE_CARD,
        title: action.title,
        description: 'description card',
        labels: [],
        date: new Date(),
        parent: action.parentId,
      };
      return [...state, card];
    }

    case CHANGE_TITLE_CARD: {
      const cards = state.map((card) => {
        if (card.id === action.cardId) {
          return { ...card, title: action.title };
        }
        return card;
      });
      return cards;
    }

    case DELETE_CARD: {
      const cards = state.filter((card) => card.id !== action.cardId);
      return cards;
    }

    default:
      return state;
  }
};
