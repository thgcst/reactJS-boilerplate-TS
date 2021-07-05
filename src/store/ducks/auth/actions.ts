import { action } from 'typesafe-actions';
import { AuthTypes, User } from './types';

// signIn
const signInRequest = (userName: string) =>
  action(AuthTypes.SIGN_IN_REQUEST, { userName });

const signInSuccess = (userData: User) =>
  action(AuthTypes.SIGN_IN_SUCCESS, {
    userData,
  });

const signInFailure = () => action(AuthTypes.SIGN_IN_FAILURE);

const AuthActions = {
  signInRequest,
  signInSuccess,
  signInFailure,
};

export default AuthActions;
