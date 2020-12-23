import {
  ADD_TASK,
  CHANGEE_NAME_TASK,
  DELETE_TASK,
  TYPE_TASK,
} from '../../constants';

const initialState = [
  {
    id: 'id task',
    type: TYPE_TASK,
    name: 'name task',
    status: false,
  },
];

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK: {
      return state;
    }

    case CHANGEE_NAME_TASK: {
      return state;
    }

    case DELETE_TASK: {
      return state;
    }

    default:
      return state;
  }
};
