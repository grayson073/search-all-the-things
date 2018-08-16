import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Companies extends Component {

  static propTypes = {
    company: PropTypes.object.isRequired
  };

  render() {

    const { company } = this.props;
    const { symbol, companyName, week52High, week52Low } = company;
    const { ytdChange, latestPrice } = company;

    return (
      <li>
        <h2>{companyName}</h2>
      </li>
    );
  }

}