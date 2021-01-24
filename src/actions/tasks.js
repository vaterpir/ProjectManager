import { ADD_TASK, DELETE_TASK, EDIT_TITLE_TASK } from '../constants/tasks';

export const addTask = (title, parent, newId) => ({
  type: ADD_TASK,
  title,
  parent,
  newId,
});

export const editTitleTask = (id, title) => ({
  type: EDIT_TITLE_TASK,
  id,
  title,
});

export const deleteTask = (deleteId) => ({
  type: DELETE_TASK,
  deleteId,
});
