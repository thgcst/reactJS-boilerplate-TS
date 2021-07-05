import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import { persistStore, persistReducer } from 'redux-persist';

import Reactotron from '~/config/ReactotronConfig';
import history from '~/routes/history';
import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';
import persistConfig from './persistConfig';

const sagaMiddleware = createSagaMiddleware({
  sagaMonitor: Reactotron.createSagaMonitor!(),
});

const middlewares = [sagaMiddleware, routerMiddleware(history)];

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  compose(Reactotron.createEnhancer!(), applyMiddleware(...middlewares)),
);

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export default store;
