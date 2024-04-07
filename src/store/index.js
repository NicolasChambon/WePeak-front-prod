import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import reducer from '../reducers/indexReducer';

import searchMiddleware from '../middleware/searchMiddleware';
import activityMiddleware from '../middleware/activityMiddleware';
import contactMiddleware from '../middleware/contactMiddleware';
import userMiddleware from '../middleware/userMiddleware';

const enhancers = composeWithDevTools(
  applyMiddleware(
    searchMiddleware,
    activityMiddleware,
    contactMiddleware,
    userMiddleware
  )
);

const store = createStore(reducer, enhancers);

export default store;
