// import { v4 as uuidv4 } from 'uuid';
import { ADD_BOARD, DELETE_BOARD, EDIT_TITLE_BOARD } from '../constants/boards';

const initialState = {
  board1: {
    id: 'board1',
    title: 'board1',
    childs: ['column1'],
  },
  board2: {
    id: 'board2',
    title: 'board2',
    childs: ['column1'],
  },
};

export const boardsReducer = (boards = initialState, action) => {
  switch (action.type) {
    case ADD_BOARD: {
      return { ...boards };
    }

    case EDIT_TITLE_BOARD: {
      return { ...boards };
    }

    case DELETE_BOARD: {
      return { ...boards };
    }
    default:
      return boards;
  }
};
