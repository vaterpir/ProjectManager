import {
  ADD_CARD,
  DELETE_CARD,
  EDIT_TITLE_CARD,
  ADD_TASK_CARD,
  DELETE_TASK_CARD,
  DELETE_COMMENT_CARD,
  ADD_COMMENT_CARD,
  EDIT_DESCRIPTION_CARD,
} from '../constants/cards';

export const addCard = (title, parent, newId) => ({
  type: ADD_CARD,
  title,
  parent,
  newId,
});

export const editTitleCard = (id, title) => ({
  type: EDIT_TITLE_CARD,
  id,
  title,
});

export const editDescriptiomCard = (id, title) => ({
  type: EDIT_DESCRIPTION_CARD,
  id,
  title,
});

export const deleteCard = (deleteId) => ({
  type: DELETE_CARD,
  deleteId,
});

export const addTaskCard = (childID, parentId) => ({
  type: ADD_TASK_CARD,
  childID,
  parentId,
});

export const deleteTaskCard = (deleteId, parentId) => ({
  type: DELETE_TASK_CARD,
  deleteId,
  parentId,
});

export const addCommentCard = (childID, parentId) => ({
  type: ADD_COMMENT_CARD,
  childID,
  parentId,
});

export const deleteCommentCard = (deleteId, parentId) => ({
  type: DELETE_COMMENT_CARD,
  deleteId,
  parentId,
});
