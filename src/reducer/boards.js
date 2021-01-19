import { v4 as uuidv4 } from 'uuid';
import {
  ADD_BOARD,
  ADD_CHILD,
  DELETE_BOARD,
  EDIT_TITLE_BOARD,
} from '../constants/boards';

const initialState = {
  board1: {
    id: 'board1',
    title: 'board1',
    childs: ['column1', 'column3'],
  },
  board2: {
    id: 'board2',
    title: 'board2',
    childs: ['column2'],
  },
};

export const boardsReducer = (boards = initialState, action) => {
  switch (action.type) {
    case ADD_BOARD: {
      const newID = uuidv4();
      const newBoards = {
        ...boards,
        [newID]: { id: newID, title: action.title },
      };
      return { ...newBoards };
    }

    case EDIT_TITLE_BOARD: {
      const board = { ...boards[action.id] };
      return { ...boards, [board.id]: { ...board, title: action.title } };
    }

    case DELETE_BOARD: {
      const { [action.deleteId]: del, ...newBoards } = boards;
      return { ...newBoards };
    }

    case ADD_CHILD: {
      return { ...boards };
    }

    default:
      return boards;
  }
};
