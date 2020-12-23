import { INPUT_ON_FOCUS } from '../../constants';

const initialState = 'board1_board';

export const inputOnFocusReducer = (state = initialState, action) => {
  switch (action.type) {
    case INPUT_ON_FOCUS: {
      return action.inputId;
    }

    default:
      return state;
  }
};
