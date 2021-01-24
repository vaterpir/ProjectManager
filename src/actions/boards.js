import {
  ADD_BOARD,
  ADD_CHILD_BOARD,
  DELETE_BOARD,
  EDIT_TITLE_BOARD,
  DELETE_CHILD_BOARD,
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

export const addChildBoard = (childID, parentId) => ({
  type: ADD_CHILD_BOARD,
  childID,
  parentId,
});

export const deleteChildBoard = (deleteId, parentId) => ({
  type: DELETE_CHILD_BOARD,
  deleteId,
  parentId,
});
