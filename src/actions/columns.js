import {
  ADD_CHILD_COLUMN,
  ADD_COLUMN,
  DELETE_CHILD_COLUMN,
  DELETE_COLUMN,
  EDIT_TITLE_COLUMN,
} from '../constants/columns';

export const addColumn = (title, parent, newId) => ({
  type: ADD_COLUMN,
  title,
  parent,
  newId,
});

export const editTitleColumn = (id, title) => ({
  type: EDIT_TITLE_COLUMN,
  id,
  title,
});

export const deleteColumn = (deleteId) => ({
  type: DELETE_COLUMN,
  deleteId,
});

export const addChildColumn = (childID, parentId) => ({
  type: ADD_CHILD_COLUMN,
  childID,
  parentId,
});

export const deleteChildColumn = (deleteId, parentId) => ({
  type: DELETE_CHILD_COLUMN,
  deleteId,
  parentId,
});
