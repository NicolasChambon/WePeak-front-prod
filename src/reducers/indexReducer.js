import { combineReducers } from 'redux';

import userReducer from './userReducer';
import searchReducer from './searchReducer';
import activityReducer from './activityReducer';
import contactReducer from './contactReducer';
import registerReducer from './registerReducer';
import globalReducer from './globalReducer';

const rootReducer = combineReducers({
  user: userReducer,
  search: searchReducer,
  activity: activityReducer,
  contact: contactReducer,
  register: registerReducer,
  global: globalReducer,
});

export default rootReducer;
