/* eslint-disable no-console */
import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

declare global {
  interface Console {
    tron: any;
  }
}

const tron = Reactotron.configure()
  .use(reactotronRedux())
  .use(reactotronSaga({}))
  .connect();

tron.clear?.();

console.tron = tron;

export default tron;
