import { ADD_BOARD } from '../constants';

export const addBord = (title) => ({
  type: ADD_BOARD,
  title,
});

export const changeNameBoard = (id, text) => ({
  type: ADD_BOARD,
  text,
  id,
});

export const deleteBord = (id) => ({
  type: ADD_BOARD,
  id,
});

export const addCard = (title) => ({
  type: ADD_BOARD,
  title,
});

export const changeNameCard = (id, text) => ({
  type: ADD_BOARD,
  text,
  id,
});

export const changeDescriptionCard = (id, text) => ({
  type: ADD_BOARD,
  text,
  id,
});

export const deleteCard = (id) => ({
  type: ADD_BOARD,
  id,
});

export const addChecklist = (title) => ({
  type: ADD_BOARD,
  title,
});

export const changeNameChecklist = (id, text) => ({
  type: ADD_BOARD,
  text,
  id,
});

export const deleteChecklist = (id) => ({
  type: ADD_BOARD,
  id,
});

export const addTask = (text) => ({
  type: ADD_BOARD,
  text,
});

export const changeStatusTask = (id) => ({
  type: ADD_BOARD,
  id,
});

export const changeNameTask = (id, text) => ({
  type: ADD_BOARD,
  id,
  text,
});

export const deleteTask = (text) => ({
  type: ADD_BOARD,
  text,
});

export const addLabelToSearch = (id) => ({
  type: ADD_BOARD,
  id,
});

export const deleteLabelToSearch = (id) => ({
  type: ADD_BOARD,
  id,
});

export const changeTextForSearch = (text) => ({
  type: ADD_BOARD,
  text,
});

export const createColorLabel = (color) => ({
  type: ADD_BOARD,
  color,
});

export const deleteColorLabel = (id) => ({
  type: ADD_BOARD,
  id,
});
