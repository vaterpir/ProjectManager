import { v4 as uuidv4 } from 'uuid';
import { ADD_BOARD, DELETE_BOARD, EDIT_TITLE_BOARD } from '../constants/boards';

const initialState = {
  board1: {
    title: 'board1 tytle',
  },
};

export const boardsReducer = (boards = initialState, action) => {
  switch (action.type) {
    case ADD_BOARD: {
      const boardId = uuidv4();
      const board = {
        title: action.title,
      };
      return { ...boards, [boardId]: board };
    }

    case EDIT_TITLE_BOARD: {
      console.log('edit');
      return { ...boards };
    }

    case DELETE_BOARD: {
      console.log('delete', boards);
      const newBoards = Object.entries(boards)
        .filter(([boardId]) => action.deleteId !== boardId)
        .reduce((acc, [boardId, board]) => ({ ...acc, [boardId]: board }), {});
      console.log(newBoards);
      return newBoards;
    }
    default:
      return boards;
  }
};
