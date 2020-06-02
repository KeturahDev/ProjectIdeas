import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Navigation from '../Navigation';

import Main from '../Main';
import Account from '../Account';
import Admin from '../Admin';
import Landing from '../Landing';
import PasswordForget from '../PasswordForget';
import SignUp from '../SignUp';
import SignIn from '../SignIn';

import * as ROUTES from '../../constants/routes'

function App() {
  return (
    <Router>
      <Navigation />
      <hr />
 
      <Route exact path={ROUTES.LANDING} component={Landing} />
      <Route path={ROUTES.SIGN_UP} component={SignUp} />
      <Route path={ROUTES.SIGN_IN} component={SignIn} />
      <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForget} />
      <Route path={ROUTES.HOME} component={Main} />
      <Route path={ROUTES.ACCOUNT} component={Account} />
      <Route path={ROUTES.ADMIN} component={Admin} />
    </Router>
  );
}

export default App;
