/** React */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
/** Pages */
import {Error, Home, Login, Profile, Player} from './pages/index';
/** Redux */
import { signIn, signOut } from './redux/userSlice';
/** Firebase */
import { auth } from './firebase';
/** Styles */
import './App.css';

const App = () => {
  const isLoggedIn = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const manageSignOns = auth.onAuthStateChanged(userAuth => {
      if(userAuth) {
        console.log(userAuth);
        dispatch(signIn({
          uid: userAuth.uid,
          email: userAuth.email
        }));
      } else {
        dispatch(signOut());
      }
    });
    return manageSignOns;
  },[dispatch])

  return (
    <div className='app'>
      <Router>
        {!isLoggedIn ? (
          <Login />
        ) : (
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route exact path="/stream">
              <Player />
            </Route>
            <Route exact path="*">
              <Error />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  )
}

export default App;
