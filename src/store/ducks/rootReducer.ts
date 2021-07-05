import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { loadingBarReducer } from 'react-redux-loading-bar';

import history from '~/routes/history';

import auth from './auth';

const createRootReducer = combineReducers({
  router: connectRouter(history),
  loadingBar: loadingBarReducer,
  auth,
});

export default createRootReducer;

export type RootState = ReturnType<typeof createRootReducer>;
