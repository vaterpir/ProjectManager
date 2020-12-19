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
    type: TYPE_BOARD,
    title: 'board1 tytle',
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
      const boards = state.map((board) => {
        if (board.id === action.boardId) {
          return { ...board, title: action.title };
        }
        return board;
      });

      return boards;
    }

    case DELETE_BOARD: {
      const boards = state.filter((board) => board.id !== action.boardId);
      return boards;
    }
    default:
      return state;
  }
};
