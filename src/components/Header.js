import React, { Component } from 'react';
import Search from './search/Search';
import PropTypes from 'prop-types';

export default class Header extends Component {
  
  static propTypes = {
    onSearch: PropTypes.func.isRequired
  };


  render() {
    const { onSearch } = this.props;

    return (
      <section>
        >>> Here is the search section:
        <Search onSearch={onSearch}/>
      </section>
    );
  }

}