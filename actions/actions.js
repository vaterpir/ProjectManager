import { ADD_PROJECT } from '../constants';

export const addProject = (title) => ({
  type: ADD_PROJECT,
  title,
});
