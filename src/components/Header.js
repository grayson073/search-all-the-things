import React, { Component } from 'react';
import Search from './search/Search';
import { Route } from 'react-router-dom';


export default class Header extends Component {


  render() {

    return (
      <div>
        <h1>Market Sector</h1>
        <Route component={Search}/>
      </div>
    );
  }

}