import moment from 'moment';
import {
  ADD_TASK,
  CHANGE_STATUS_TASK,
  DELETE_TASK,
  EDIT_TITLE_TASK,
} from '../constants/tasks';

const initialState = {
  task1: {
    id: 'task1',
    parent: 'card1',
    title: 'task1-tilte',
    checked: false,
    date: '0',
  },
  task2: {
    id: 'task2',
    parent: 'card2',
    title: 'task2-tilte',
    checked: false,
    date: '1',
  },
  task3: {
    id: 'task3',
    parent: 'card3',
    title: 'task3-tilte',
    checked: false,
    date: '2',
  },
  task4: {
    id: 'task4',
    parent: 'card4',
    title: 'task4-tilte',
    checked: false,
    date: '3',
  },
  task5: {
    id: 'task5',
    parent: 'card1',
    title: 'task5-tilte',
    checked: false,
    date: '4',
  },
  task6: {
    id: 'task6',
    parent: 'card1',
    title: 'task6-tilte',
    checked: false,
    date: '5',
  },
};

export const tasksReducer = (tasks = initialState, action) => {
  switch (action.type) {
    case ADD_TASK: {
      const { newId, title, parent } = action;
      const newTasks = {
        ...tasks,
        [newId]: {
          id: newId,
          title,
          parent,
          date: moment().format('MMMM Do YYYY, h:mm:ss a'),
        },
      };
      return { ...newTasks };
    }
    case CHANGE_STATUS_TASK: {
      const { checked, taskId } = action;
      const newTasks = { ...tasks, [taskId]: { ...tasks[taskId], checked } };
      return { ...newTasks };
    }

    case EDIT_TITLE_TASK: {
      const task = { ...tasks[action.id] };
      return { ...tasks, [task.id]: { ...task, title: action.title } };
    }

    case DELETE_TASK: {
      const { [action.deleteId]: del, ...newTasks } = tasks;
      return { ...newTasks };
    }

    default:
      return { ...tasks };
  }
};
