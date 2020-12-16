import { ADD_BOARD } from '../constants';

export const addBord = (title) => ({
  type: ADD_BOARD,
  title,
});

export const deleteBord = (id) => ({
  type: ADD_BOARD,
  id,
});

export const addCard = (title) => ({
  type: ADD_BOARD,
  title,
});

export const deleteCard = (id) => ({
  type: ADD_BOARD,
  id,
});

export const addChecklist = (title) => ({
  type: ADD_BOARD,
  title,
});

export const deleteChecklist = (id) => ({
  type: ADD_BOARD,
  id,
});

export const addTask = (text) => ({
  type: ADD_BOARD,
  text,
});

export const deleteTask = (text) => ({
  type: ADD_BOARD,
  text,
});

export const addLabelToSearch = () => ({
  type: ADD_BOARD,
});

export const deleteLabelToSearch = (id) => ({
  type: ADD_BOARD,
  id,
});

export const addTextForSearch = (text) => ({
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

export const changeNameCard = (text) => ({
  type: ADD_BOARD,
  text,
});

export const changeDescriptionCard = (text) => ({
  type: ADD_BOARD,
  text,
});
