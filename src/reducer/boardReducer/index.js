import { ADD_BOARD } from '../../constants';

const initialState = [
  {
    id: 'unic id board',
    type: 'boad',
    cards: ['id card 2', 'id card 2'],
  },
  {
    id: 'unic id card',
    type: 'card',
    label: ['red', 'yellow', 'green', 'orange'],
    checklist: ['id checklist 1', 'id checklist 2'],
  },
  {
    id: 'id checklist',
    type: 'checklist',
    tasks: ['id task 1', 'id task 2'],
  },
];

export const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOARD: {
      return state;
    }
    default:
      return state;
  }
};
