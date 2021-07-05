import { call, put, all, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import api from '~/services/api';
import AuthActions from './actions';
import { AuthTypes, User } from './types';

function* signIn(props: ReturnType<typeof AuthActions.signInRequest>) {
  const { username } = props.payload;

  try {
    const res: { data: User } = yield call(api.get, `users/${username}`);

    yield put(AuthActions.signInSuccess(res.data));
    yield put(push('/'));
  } catch (error) {
    yield put(AuthActions.signInFailure());
  }
}

function* resetState() {
  yield put(push('/login'));
}

export default all([
  takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
  takeLatest(AuthTypes.RESET_STATE, resetState),
]);
