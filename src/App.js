import React, { Component } from 'react';
import './App.css';
import Amplify from 'aws-amplify';
import amplify_config from './amplify-config';
import { Header } from 'semantic-ui-react';

//import SignUpForm from './CognitoReactSignUpForm'
import SignInForm from './CognitoReactSignInForm';
import {Switch, Route} from 'react-router-dom';
import Business from './components/Business/Business';
import Sucesso from './views/sucesso';
import Developer from './components/Developer/Developer';

Amplify.configure(amplify_config);

class App extends Component {

  render() {
    return (
      <div class="main">
        <main>
        <Switch>
            <Route path="/business"><Business/></Route>
            <Route path="/developer"><Developer/></Route>
            <Route path="/sucesso"><Sucesso/></Route>
        </Switch>
        </main>
      </div>
    );
  }
  
}

export default App;
