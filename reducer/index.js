import { combineReducers } from 'redux';

import { projectsReducer } from './projectsReducer';
import { membersReducer } from './membersReducer';

export const rootReducer = combineReducers({
  projectsState: projectsReducer,
  membersState: membersReducer,
});
