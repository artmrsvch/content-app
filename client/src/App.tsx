import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Redirect, Switch } from 'react-router-dom';

import {showAsideBar } from './models/actions';
import { Header, HandlerMenu } from './components';
import Auth from './pages/Auth/Auth';
import Workspace from './pages/Workspace/Workspace';
import Profile from './pages/Profile/Profile';
import Quality from './pages/ProductVerification/Quality';

interface RootState {
  isLoggedIn: boolean;
  isAside: {
    status: boolean;
    isError: boolean;
    message: string;
  };
}

const App: React.FC = () => {
  const dispatch = useDispatch()
  const { isLoggedIn, isAside } = useSelector((state: RootState) => state);

  isAside.status && setTimeout(()=>{
    dispatch(
      showAsideBar({
        status: false,
        isError: false,
        message: ''
      })
    );
  }, 1000)

  return (
    <div className="wrapper">
      {isLoggedIn && <Header />}
      {isAside.status && <HandlerMenu message={isAside.message} isError={isAside.isError} />}
      <Switch>
        <Route path="/login" component={Auth} />
        <Route path="/workspace" component={Workspace} />
        <Route path="/quality" component={Quality} />
        <Route path="/profile" component={Profile} />
        <Redirect to="/login" />
      </Switch>
    </div>
  );
};

export default App;
