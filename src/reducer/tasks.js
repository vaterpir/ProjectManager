import { ADD_TASK } from '../constants/tasks';

const initialState = {
  task1: {
    id: 'task1',
    parent: 'card1',
    title: 'task1',
    complite: false,
  },
  task2: {
    id: 'task2',
    parent: 'card2',
    title: 'task2',
    complite: false,
  },
};

export const tasksReducer = (tasks = initialState, action) => {
  switch (action.type) {
    case ADD_TASK: {
      const { title, parent, newId } = action;
      console.log(title, parent, newId);
      return { ...tasks };
    }

    default:
      return tasks;
  }
};
