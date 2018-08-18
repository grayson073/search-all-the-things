import React, { Component } from 'react';
import Header from './Header';
import Results from './companies/Results';
import Home from './home/Home';
import CompanyDetail from './companies/CompanyDetail';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

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
              <Route exact path="/" component={Home}/>
              <Route exact path="/companies" component={Results}/>
              <Route path="/companies/:id" component={CompanyDetail}/>
              <Redirect to="/"/>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;