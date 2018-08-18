import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Paging extends Component {

  static propTypes = {
    page: PropTypes.number,
    totalPages: PropTypes.number,
    onPage: PropTypes.func.isRequired
  };

  handlePage(increment) {
    const { page, onPage, totalPages } = this.props;
    if(page >= 0 || page <= totalPages)
      onPage({ page: page + increment });
  }

  render() {
    const { page, totalPages } = this.props;
    return (
      <div>
        <button disabled={page === 0} onClick={() => this.handlePage(-1)}>Previous</button>
        <p>Page  {page + 1} of {totalPages}</p>
        <button disabled={page === totalPages - 1} onClick={() => this.handlePage(+1)}>Next</button>
      </div>
    );
  }
}
