import { call, put, all, takeLatest } from 'redux-saga/effects';

import api from '~/services/api';
import AuthActions from './actions';
import { AuthTypes, User } from './types';

function* signIn(props: ReturnType<typeof AuthActions.signInRequest>) {
  const { userName } = props.payload;

  try {
    const res: { data: User } = yield call(api.get, `users/${userName}`);
    yield put(AuthActions.signInSuccess(res.data));
  } catch (error) {
    yield put(AuthActions.signInFailure());
  }
}

export default all([takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn)]);
