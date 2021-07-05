import { call, put, all, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

import api from '~/services/api';
import AuthActions from './actions';
import { AuthTypes, User } from './types';

const test = (time: number) => {
  return new Promise(resolve => setTimeout(resolve, time));
};

function* signIn(props: ReturnType<typeof AuthActions.signInRequest>) {
  const { username } = props.payload;

  try {
    yield put(showLoading());

    const res: { data: User } = yield call(api.get, `users/${username}`);

    yield put(AuthActions.signInSuccess(res.data));
    yield put(push('/'));
  } catch (error) {
    yield put(AuthActions.signInFailure());
  } finally {
    yield put(hideLoading());
  }
}

function* resetState() {
  yield put(push('/login'));
}

export default all([
  takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
  takeLatest(AuthTypes.RESET_STATE, resetState),
]);
