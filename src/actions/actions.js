import { ADD_BOARD } from '../constants';

export const addProject = (title) => ({
  type: ADD_BOARD,
  title,
});
