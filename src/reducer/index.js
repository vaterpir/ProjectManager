import { combineReducers } from 'redux';

import { boardsReducer } from './boardsReducer';
import { cardsReducer } from './cardsReducer';
import { checklistsReducer } from './checklistsReducer';
import { tasksReducer } from './tasksReducer';
import { commentsReducer } from './commentsReduecer';
import { labelsReducer } from './labelsReducer';
import { inputOnFocusReducer } from './focusInputReducer';

export const rootReducer = combineReducers({
  boards: boardsReducer,
  cards: cardsReducer,
  checklists: checklistsReducer,
  tasks: tasksReducer,
  comments: commentsReducer,
  labels: labelsReducer,
  inputOnFocus: inputOnFocusReducer,
});
