import {
  ADD_BOARD,
  CHANGE_NAME_BOARD,
  DELETE_BOARD,
  ADD_CARD,
  CHANGE_NAME_CARD,
  CHANGE_DESCRIPTION_CARD,
  DELETE_CARD,
  ADD_CHECKLIST,
  CHANGE_NAME_CHECKLIST,
  DELETE_CHECKLIST,
  ADD_TASK,
  CHANGEE_STATUS_TASK,
  CHANGEE_NAME_TASK,
  DELETE_TASK,
  ADD_LABEL_TO_SEARCH,
  DELETE_LABEL_TO_SEARCH,
  CHANGE_TEXT_TO_SEARCH,
  CREATE_COLOR_LABEL,
  DELETE_COLOR_LABEL,
  CHANGE_COMMENT,
  ADD_COMMENT,
  DELETE_COMMENT,
} from '../constants';

export const addBord = (title) => ({
  type: ADD_BOARD,
  title,
});

export const changeNameBoard = (id, text) => ({
  type: CHANGE_NAME_BOARD,
  text,
  id,
});

export const deleteBord = (id) => ({
  type: DELETE_BOARD,
  id,
});

export const addCard = (title) => ({
  type: ADD_CARD,
  title,
});

export const changeNameCard = (id, text) => ({
  type: CHANGE_NAME_CARD,
  text,
  id,
});

export const changeDescriptionCard = (id, text) => ({
  type: CHANGE_DESCRIPTION_CARD,
  text,
  id,
});

export const deleteCard = (id) => ({
  type: DELETE_CARD,
  id,
});

export const addChecklist = (title) => ({
  type: ADD_CHECKLIST,
  title,
});

export const changeNameChecklist = (id, text) => ({
  type: CHANGE_NAME_CHECKLIST,
  text,
  id,
});

export const deleteChecklist = (id) => ({
  type: DELETE_CHECKLIST,
  id,
});

export const addTask = (text) => ({
  type: ADD_TASK,
  text,
});

export const changeStatusTask = (id) => ({
  type: CHANGEE_STATUS_TASK,
  id,
});

export const changeNameTask = (id, text) => ({
  type: CHANGEE_NAME_TASK,
  id,
  text,
});

export const deleteTask = (text) => ({
  type: DELETE_TASK,
  text,
});

export const addLabelToSearch = (id) => ({
  type: ADD_LABEL_TO_SEARCH,
  id,
});

export const deleteLabelToSearch = (id) => ({
  type: DELETE_LABEL_TO_SEARCH,
  id,
});

export const changeTextToSearch = (text) => ({
  type: CHANGE_TEXT_TO_SEARCH,
  text,
});

export const createColorLabel = (color) => ({
  type: CREATE_COLOR_LABEL,
  color,
});

export const deleteColorLabel = (id) => ({
  type: DELETE_COLOR_LABEL,
  id,
});

export const AddComment = (text) => ({
  type: ADD_COMMENT,
  text,
});

export const ChangeComment = (id, text) => ({
  type: CHANGE_COMMENT,
  id,
  text,
});

export const deleteComment = (id) => ({
  type: DELETE_COMMENT,
  id,
});
