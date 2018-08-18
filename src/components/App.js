import React, { Component } from 'react';
import Header from './Header';
import Results from './companies/Results';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {

  render() {

    return (
      <Router>
        <div>
          <header>
            <Header/>
          </header>

          <main>
            <Switch>
              <Route exact path="/companies" component={Results}/>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;