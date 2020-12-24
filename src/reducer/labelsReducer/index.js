import {
  CREATE_COLOR_LABEL,
  DELETE_COLOR_LABEL,
  TYPE_LABEL,
} from '../../constants';

const initialState = [
  {
    id: 'id label',
    type: TYPE_LABEL,
    className: 'blue',
    text: 'text',
  },
  {
    id: 'id label1',
    type: TYPE_LABEL,
    className: 'red',
    text: '',
  },
];

export const labelsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_COLOR_LABEL: {
      return state;
    }

    case DELETE_COLOR_LABEL: {
      return state;
    }

    default:
      return state;
  }
};
