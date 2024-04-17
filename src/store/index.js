import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import reducer from '../reducers/indexReducer';

import searchMiddleware from '../middleware/searchMiddleware';
import activityMiddleware from '../middleware/activityMiddleware';
import createActivityMiddleware from '../middleware/createActivityMiddleware';
import contactMiddleware from '../middleware/contactMiddleware';
import userMiddleware from '../middleware/userMiddleware';
import registerMiddleware from '../middleware/registerMiddleware';
import editProfileMiddleware from '../middleware/editProfileMiddleware';
import sportsMiddleware from '../middleware/sportsMiddleware';

const enhancers = composeWithDevTools(
  applyMiddleware(
    searchMiddleware,
    activityMiddleware,
    createActivityMiddleware,
    contactMiddleware,
    userMiddleware,
    registerMiddleware,
    editProfileMiddleware,
    sportsMiddleware
  )
);

const store = createStore(reducer, enhancers);

export default store;
