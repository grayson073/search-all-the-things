import React, { Component } from 'react';
import PropTypes from 'prop-types';
import qs from 'query-string';
import styles from './Search.css';

export default class Search extends Component {

  state = {
    search: '',
    ticker: '',
    sectors: [
      'Consumer Cyclical',
      'Technology',
      'Healthcare',
      'Industrials',
      'Utilities',
      'Financials',
      'Consumer Discretionary',
      'Consumer Staples',
      'Energy',
      'Materials',
      'Real Estate',
      'Communication Services'
    ]
  };

static propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

componentDidMount() {
  const { location } = this.props;
  const { search = '' } = qs.parse(location.search);
  this.setState({ search });
}

handleChange = (search) => {
  this.setState({ search });
};

handleSubmit = event => {
  event.preventDefault();
  const { search } = this.state;
  if(!search) return;

  const { history } = this.props;
  history.push({
    pathname: '/companies',
    search: qs.stringify({ search, page: 1 })
  });
};

handleTickerChange = (ticker) => {
  this.setState({ ticker });
};

handleTicker = event => {
  const { ticker } = this.state;
  event.preventDefault();
  if(ticker === '' || ticker.length > 5) return;

  const { history } = this.props;
  history.push({
    pathname: `/companies/${ticker}`
  });
};

render() {

  const { sectors, search } = this.state;

  return (
    <div className={styles.search}>
      <form className="search-form" onSubmit={event => this.handleSubmit(event)}>
        <select value={search} onChange={({ target }) => this.handleChange(target.value)}>
          <option value="" >Select a sector</option>
          {sectors.map(sector => (
            <option key={sector} value={sector}>{sector}</option>
          ))}
        </select>
        <button disabled={!search}>Search</button>
      </form>

      <form onSubmit={event => this.handleTicker(event)}>
        <input 
          onChange={({ target }) => this.handleTickerChange(target.value)} 
          maxLength="5" 
          type="text" 
          placeholder="Enter a stock symbol"
        >
        </input>
        <button type="submit">Enter</button>
      </form>
    </div>

  );
}
}