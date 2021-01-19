import { combineReducers } from 'redux';
import { boardsReducer } from './boards';
import { cardsReducer } from './cards';
import { columnsReducer } from './columns';

export const rootReducer = combineReducers({
  boards: boardsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
});
