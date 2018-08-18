import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Company from './Company';
import Paging from '../paging/Paging';

export default class Companies extends Component {
  state = {
    page: 0
  };

  static propTypes = {
    results: PropTypes.arrayOf(Array),
  };

  handlePaging = (page) => {
    this.setState(page);
  };

  render() {
    const { page } = this.state;
    const { results } = this.props;
    if(!results) return null;
    return (
      <Fragment>
        <section>
          <Paging onPage={this.handlePaging} page={page} totalPages={results.length}/>
        </section>
        <ul>
          {results[page].map((result, i) => (
            <Company key={i} company={result}/>
          ))}
        </ul>
      </Fragment>
    );
  }

}