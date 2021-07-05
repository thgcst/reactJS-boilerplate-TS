import { Reducer } from 'redux';
import { AuthState, AuthTypes } from './types';

export const INITIAL_STATE: AuthState = {
  signedIn: false,
  userData: {},
  error: false,
  loading: false,
};

const reducer: Reducer<AuthState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // SignIn
    case AuthTypes.SIGN_IN_REQUEST:
      return { ...state, loading: true };
    case AuthTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        signedIn: true,
        loading: false,
        error: false,
        userData: action.payload.userData,
      };
    case AuthTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };

    // resetState
    case AuthTypes.RESET_STATE:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default reducer;
