import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Favorite extends Component {

  static propTypes = {
    company: PropTypes.object.isRequired
  };

  render() {

    const { company } = this.props;

    return (
      <li>
        <Link to={`/companies/${company.symbol}`}>
          <h2>{company.companyName}  ({company.symbol})</h2>
        </Link>
      </li>
    );
  }
}
