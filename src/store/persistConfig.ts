import { PersistConfig } from 'redux-persist';
import { createBlacklistFilter } from 'redux-persist-transform-filter';
import storage from 'redux-persist/lib/storage';

import { RootState } from './ducks/rootReducer';

const authBlackList = createBlacklistFilter('auth', ['loading', 'error']);

const persistConfig: PersistConfig<RootState> = {
  key: 'root',
  storage,
  transforms: [authBlackList],
};

export default persistConfig;
