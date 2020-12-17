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
    parent: 'card 1',
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
