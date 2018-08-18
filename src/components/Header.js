import React, { Component } from 'react';
import Search from './search/Search';
import { Route, Link } from 'react-router-dom';

export default class Header extends Component {

  render() {

    return (
      <div>
        <div>
          <h1>Market Sector</h1>
          <Route component={Search}/>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/favorites">Favorites</Link>
            </li>
            <li>
              <Link to="/companies">Search</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }

}