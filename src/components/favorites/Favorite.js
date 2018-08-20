import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Favorite extends Component {

  static propTypes = {
    company: PropTypes.object.isRequired
  };

  render() {

    const { company } = this.props;
    const { symbol } = company;


    return (
      <li>
        <Link to ={`/companies/${symbol}`}>
          {company}
        </Link>
      </li>
    );
  }
}
