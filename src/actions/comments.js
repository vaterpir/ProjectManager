import {
  ADD_COMMENT,
  DELETE_COMMENT,
  EDIT_TITLE_COMMENT,
} from '../constants/comments';

export const addComment = (title, parent, newId) => ({
  type: ADD_COMMENT,
  title,
  parent,
  newId,
});

export const editTitleComment = (id, title) => ({
  type: EDIT_TITLE_COMMENT,
  id,
  title,
});

export const deleteComment = (deleteId) => ({
  type: DELETE_COMMENT,
  deleteId,
});
