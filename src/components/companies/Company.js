import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Company.css';

export default class Companies extends Component {

  static propTypes = {
    company: PropTypes.object.isRequired
  };

  render() {

    const { company } = this.props;
    const { symbol, companyName, week52High, week52Low } = company;
    const { ytdChange, latestPrice } = company;

    return (
      <li className={styles.company}>
        <Link to={`/companies/${symbol}`}>
          <h3>{companyName} ({symbol})</h3><br/>
        </Link>
        Latest Price: {latestPrice}<br/>
        52-Week High: {week52High}<br/>
        52-Week Low: {week52Low}<br/>
        YTD Change: {ytdChange}<br/><br/>
      </li>
    );
  }

}