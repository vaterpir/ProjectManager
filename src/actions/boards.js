import { ADD_BOARD, DELETE_BOARD, EDIT_TITLE_BOARD } from '../constants/boards';

export const addBoard = (title) => ({
  type: ADD_BOARD,
  title,
});

export const editTitleBoard = (parentId, title) => ({
  type: EDIT_TITLE_BOARD,
  parentId,
  title,
});

export const deleteBoard = (deleteId) => ({
  type: DELETE_BOARD,
  deleteId,
});
