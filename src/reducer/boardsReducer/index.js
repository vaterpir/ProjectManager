import { v4 as uuidv4 } from 'uuid';
import {
  ADD_BOARD,
  CHANGE_NAME_BOARD,
  DELETE_BOARD,
  TYPE_BOARD,
} from '../../constants';

const initialState = [
  {
    id: 'board1',
    title: 'board1 tytle',
    type: TYPE_BOARD,
  },
];

export const boardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOARD: {
      const board = {
        id: uuidv4(),
        type: TYPE_BOARD,
        title: action.title,
      };
      return [...state, board];
    }

    case CHANGE_NAME_BOARD: {
      return state;
    }

    case DELETE_BOARD: {
      return state;
    }
    default:
      return state;
  }
};
