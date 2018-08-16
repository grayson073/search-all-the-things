import React, { Component } from 'react';
import Search from './search/Search';

export default class Header extends Component {

  render() {

    return (
      <section>
        Here is the search section:
        <Search/>
      </section>
    );
  }

}