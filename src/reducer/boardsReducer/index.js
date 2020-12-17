import {
  ADD_BOARD,
  CHANGE_NAME_BOARD,
  DELETE_BOARD,
  TYPE_BOARD,
} from '../../constants';

const initialState = [
  {
    id: 'id board',
    type: TYPE_BOARD,
    cards: ['id card 2', 'id card 2'],
  },
];

export const boardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOARD: {
      const board = {
        id: 'id 2 board',
        type: TYPE_BOARD,
        name: action.title,
        cards: [],
      };
      return [...state, board];
    }

    case CHANGE_NAME_BOARD: {
      return state;
    }

    case DELETE_BOARD: {
      return state;
    }
    default:
      return state;
  }
};
