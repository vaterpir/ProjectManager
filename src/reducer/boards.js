import { v4 as uuidv4 } from 'uuid';
import {
  ADD_BOARD,
  ADD_CHILD_BOARD,
  CHANGE_STATUS_FAVORITES_BOARD,
  DELETE_BOARD,
  DELETE_CHILD_BOARD,
  EDIT_TITLE_BOARD,
} from '../constants/boards';

const initialState = {
  board1: {
    id: 'board1',
    title: 'Доска 1',
    favorites: true,
    childs: ['column1', 'column3'],
  },
  board2: {
    id: 'board2',
    title: 'Доска 2',
    favorites: false,
    childs: ['column2'],
  },
};

export const boardsReducer = (boards = initialState, action) => {
  switch (action.type) {
    case ADD_BOARD: {
      const newID = uuidv4();
      const newBoards = {
        ...boards,
        [newID]: { id: newID, title: action.title, childs: [] },
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

    case DELETE_CHILD_BOARD: {
      const { deleteId, parentId } = action;
      const newChilds = boards[parentId].childs.filter(
        (child) => child !== deleteId,
      );
      const newBoards = {
        ...boards,
        [parentId]: {
          ...boards[parentId],
          childs: newChilds,
        },
      };
      return { ...newBoards };
    }

    case ADD_CHILD_BOARD: {
      const { childID, parentId } = action;

      const newBoards = {
        ...boards,
        [parentId]: {
          ...boards[parentId],
          childs: [...boards[parentId].childs, childID],
        },
      };

      return { ...newBoards };
    }

    case CHANGE_STATUS_FAVORITES_BOARD: {
      const { id } = action;
      const newFavorites = !boards[id].favorites;
      return { ...boards, [id]: { ...boards[id], favorites: newFavorites } };
    }

    default:
      return boards;
  }
};
