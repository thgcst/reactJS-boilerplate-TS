import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from '~/routes/history';

import auth from './auth';

const createRootReducer = combineReducers({
  router: connectRouter(history),
  auth,
});

export default createRootReducer;

export type RootState = ReturnType<typeof createRootReducer>;
