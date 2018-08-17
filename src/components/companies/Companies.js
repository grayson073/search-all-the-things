import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Company from './Company';

export default class Companies extends Component {
  state = {
    page: 0
  };

  static propTypes = {
    results: PropTypes.arrayOf(Array),
  };

  render() {
    const { page } = this.state;
    const { results } = this.props;
    if(!results) return null;
    return (
      <ul>
        {results[page].map((result, i) => (
          <Company key={i} company={result}/>
        ))}
      </ul>
    );
  }

}