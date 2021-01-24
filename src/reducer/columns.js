import { v4 as uuidv4 } from 'uuid';
import {
  ADD_CHILD_COLUMN,
  ADD_COLUMN,
  DELETE_CHILD_COLUMN,
  DELETE_COLUMN,
  EDIT_TITLE_COLUMN,
} from '../constants/columns';

const initialState = {
  column1: {
    id: 'column1',
    parent: 'board1',
    title: 'column1',
    childs: ['card1', 'card3'],
  },
  column2: {
    id: 'column2',
    parent: 'board2',
    title: 'column2',
    childs: ['card2'],
  },
  column3: {
    id: 'column3',
    parent: 'board1',
    title: 'column3',
    childs: ['card4'],
  },
};

export const columnsReducer = (columns = initialState, action) => {
  switch (action.type) {
    case ADD_COLUMN: {
      const { newId, title, parent } = action;
      const newColumns = {
        ...columns,
        [newId]: {
          id: newId,
          title,
          parent,
          childs: [],
        },
      };
      return { ...newColumns };
    }

    case EDIT_TITLE_COLUMN: {
      const board = { ...columns[action.id] };
      return { ...columns, [board.id]: { ...board, title: action.title } };
    }

    case DELETE_COLUMN: {
      const { [action.deleteId]: del, ...newColumns } = columns;
      return { ...newColumns };
    }

    case ADD_CHILD_COLUMN: {
      const { childID, parentId } = action;

      const newColumns = {
        ...columns,
        [parentId]: {
          ...columns[parentId],
          childs: [...columns[parentId].childs, childID],
        },
      };

      return { ...newColumns };
    }

    case DELETE_CHILD_COLUMN: {
      const { deleteId, parentId } = action;
      const newChilds = columns[parentId].childs.filter(
        (child) => child !== deleteId,
      );
      const newColumns = {
        ...columns,
        [parentId]: {
          ...columns[parentId],
          childs: newChilds,
        },
      };
      return { ...newColumns };
    }

    default:
      return columns;
  }
};
