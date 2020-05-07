import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';

import { auth, showAsideBar } from './actions';

const asideDefault = {
  status: false,
  isError: false,
  message: '',
};

const isLoggedIn = handleActions(
  {
    [auth]: () => true,
  },
  true
);
const isAside = handleActions(
  {
    [showAsideBar]: (_state, { payload }) => {
      const { status, isError, message } = payload;

      return { status, isError, message };
    },
  },
  asideDefault
);

export default combineReducers({
  isLoggedIn,
  isAside,
});
