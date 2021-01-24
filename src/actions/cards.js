import {
  ADD_CARD,
  ADD_CHILD_CARD,
  DELETE_CARD,
  EDIT_TITLE_CARD,
  DELETE_CHILD_CARD,
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

export const deleteCard = (deleteId) => ({
  type: DELETE_CARD,
  deleteId,
});

export const addChildCard = (childID, parentId) => ({
  type: ADD_CHILD_CARD,
  childID,
  parentId,
});

export const deleteChildCard = (deleteId, parentId) => ({
  type: DELETE_CHILD_CARD,
  deleteId,
  parentId,
});
