import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Company from './Company';

export default class Companies extends Component {

  static propTypes = {
    companies: PropTypes.arrayOf(Object)
  };

  render() {

    const { companies } = this.props;
    console.log('COMPANIES on companies.js', companies);
    return (
      <ul>
        {companies.map((company, i) => (
          <Company key={i} company={company}/>
        ))}
      </ul>
    );
  }

}