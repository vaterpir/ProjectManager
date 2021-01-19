import {
  ADD_BOARD, ADD_CHILD, DELETE_BOARD, EDIT_TITLE_BOARD,
} from '../constants/boards';

export const addBoard = (title) => ({
  type: ADD_BOARD,
  title,
});

export const editTitleBoard = (id, title) => ({
  type: EDIT_TITLE_BOARD,
  id,
  title,
});

export const deleteBoard = (deleteId) => ({
  type: DELETE_BOARD,
  deleteId,
});

export const addChild = (childID) => ({
  type: ADD_CHILD,
  childID,
});
