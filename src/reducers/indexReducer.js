import { combineReducers } from 'redux';

import userReducer from './userReducer';
import searchReducer from './searchReducer';
import activityReducer from './activityReducer';
import contactReducer from './contactReducer';
import registerReducer from './registerReducer';
import globalReducer from './globalReducer';
import sportsReducer from './sportsReducer';
import createActivityReducer from './createActivityReducer';
import editProfileReducer from './editProfileReducer';

const rootReducer = combineReducers({
  user: userReducer,
  search: searchReducer,
  activity: activityReducer,
  createActivity: createActivityReducer,
  contact: contactReducer,
  register: registerReducer,
  sports: sportsReducer,
  global: globalReducer,
  editProfile: editProfileReducer,
});

export default rootReducer;
