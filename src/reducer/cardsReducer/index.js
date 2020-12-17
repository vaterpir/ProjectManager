import {
  ADD_CARD,
  TYPE_CARD,
  DELETE_CARD,
  CHANGE_NAME_CARD,
} from '../../constants';

const initialState = [
  {
    id: 'id card',
    type: TYPE_CARD,
    name: 'name card',
    description: 'description card',
    label: ['red', 'yellow', 'green', 'orange'],
    checklist: ['id checklist 1', 'id checklist 2'],
  },
];

export const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD: {
      return state;
    }

    case CHANGE_NAME_CARD: {
      return state;
    }

    case DELETE_CARD: {
      return state;
    }

    default:
      return state;
  }
};
