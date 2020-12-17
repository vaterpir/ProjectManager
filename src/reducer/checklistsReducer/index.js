import {
  ADD_CHECKLIST,
  CHANGE_NAME_CHECKLIST,
  DELETE_CHECKLIST,
  TYPE_CHECKLIST,
} from '../../constants';

const initialState = [
  {
    id: 'id checklist',
    type: TYPE_CHECKLIST,
    tasks: ['id task 1', 'id task 2'],
  },
];

export const checklistsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHECKLIST: {
      return state;
    }

    case CHANGE_NAME_CHECKLIST: {
      return state;
    }

    case DELETE_CHECKLIST: {
      return state;
    }

    default:
      return state;
  }
};
