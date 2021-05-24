import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import DetailState from './context/detail/DetailState'
import AuthState from './context/auth/AuthState';
import Register from './components/authentication/Register';
import Login from './components/authentication/Login';
import AlertState from './context/alert/AlertState';
import Alerts from './components/layout/Alerts';
import setAuthToken from './utils/setAuthToken'
import PrivateRoute from './components/routing/PrivateRoute';
import FormCont from './components/authentication/FormCont';
if (localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {
  return (
    <AuthState>
      <DetailState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar />
              <div className='container'>
                <Alerts />
                <Switch>
                  <PrivateRoute exact path='/' component={Home} />
                  <Route exact path='/about' component={About} />
                  <Route exact path='/register' component={FormCont} />
                  <Route exact path='/login' component={FormCont} />

                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </DetailState>
    </AuthState>
  );
}

export default App;
