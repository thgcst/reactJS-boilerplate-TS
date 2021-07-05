import { action } from 'typesafe-actions';
import { AuthTypes, User } from './types';

// signIn
const signInRequest = (username: string) =>
  action(AuthTypes.SIGN_IN_REQUEST, { username });

const signInSuccess = (userData: User) =>
  action(AuthTypes.SIGN_IN_SUCCESS, {
    userData,
  });

const signInFailure = () => action(AuthTypes.SIGN_IN_FAILURE);

const resetState = () => action(AuthTypes.RESET_STATE);

const AuthActions = {
  signInRequest,
  signInSuccess,
  signInFailure,
  resetState,
};

export default AuthActions;
