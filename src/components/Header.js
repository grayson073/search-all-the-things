import React, { Component, Fragment } from 'react';
import Search from './search/Search';
import PropTypes from 'prop-types';

export default class Header extends Component {
  
  static propTypes = {
    onSearch: PropTypes.func.isRequired,
    sector: PropTypes.string.isRequired
  };


  render() {
    const { onSearch, sector } = this.props;

    return (
      <Fragment>
        <h1>{sector}</h1>
        <section>
          ...And here is the search section within header:
          <Search onSearch={onSearch}/>
        </section>
      </Fragment>
    );
  }

}