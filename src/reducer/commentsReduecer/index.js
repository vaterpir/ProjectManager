import {
  ADD_COMMENT,
  CHANGE_COMMENT,
  DELETE_COMMENT,
  TYPE_COMMENT,
} from '../../constants';

const initialState = [
  {
    id: 'id comment',
    type: TYPE_COMMENT,
    comment: 'text comment',
  },
];

export const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT: {
      return state;
    }

    case CHANGE_COMMENT: {
      return state;
    }

    case DELETE_COMMENT: {
      return state;
    }

    default:
      return state;
  }
};
