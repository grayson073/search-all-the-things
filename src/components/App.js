import React, { Component } from 'react';
import Header from './Header';
import Results from './companies/Results';
import Home from './home/Home';
import CompanyDetail from './companies/CompanyDetail';
import Favorites from './favorites/Favorites';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import styles from './App.css';

class App extends Component {

  render() {

    return (
      <div className={styles.app}>
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
                <Route path="/favorites" component={Favorites}/>
                <Redirect to="/"/>
              </Switch>
            </main>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;