import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Paging extends Component {

  static propTypes = {
    page: PropTypes.number,
    results: PropTypes.arrayOf(Array),
    onPage: PropTypes.func.isRequired
  };

  handlePage(increment) {
    const { page, onPage, results } = this.props;
    if(page >= 1 || page <= results.length) {
      onPage(page + increment);
    }
  }

  render() {
    const { page, results } = this.props;
    if(!results) return null;
    
    return (
      <div>
        <button disabled={page === 1} onClick={() => this.handlePage(-1)}>Previous</button>
        <p>Page  {page} of {results.length}</p>
        <button disabled={page === results.length} onClick={() => this.handlePage(+1)}>Next</button>
      </div>
    );
  }
}
