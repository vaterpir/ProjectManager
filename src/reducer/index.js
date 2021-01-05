import { combineReducers } from 'redux';
import { boardsReducer } from './boards';

export const rootReducer = combineReducers({
  boards: boardsReducer,
});
