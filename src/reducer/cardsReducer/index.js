import { v4 as uuidv4 } from 'uuid';
import {
  ADD_CARD,
  TYPE_CARD,
  DELETE_CARD,
  CHANGE_NAME_CARD,
} from '../../constants';

const initialState = [
  {
    id: uuidv4(),
    type: TYPE_CARD,
    title: 'card 1',
    description: 'description card',
    label: [],
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
        label: [],
        parent: action.parentId,
      };
      console.log(card);
      return [...state, card];
    }

    case CHANGE_NAME_CARD: {
      return state;
    }

    case DELETE_CARD: {
      return state;
    }

    default:
      return state;
  }
};
