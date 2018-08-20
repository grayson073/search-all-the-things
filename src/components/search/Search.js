import React, { Component } from 'react';
import PropTypes from 'prop-types';
import qs from 'query-string';

export default class Search extends Component {

  state = {
    search: '',
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
  console.log('component did mount');
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
    search: qs.stringify({ search })
  });
};

render() {

  const { sectors, search } = this.state;

  return (
    <form className="search-form" onSubmit={event => this.handleSubmit(event)}>
      <select value={search} onChange={({ target }) => this.handleChange(target.value)}>
        <option value="" >Select a sector</option>
        {sectors.map(sector => (
          <option key={sector} value={sector}>{sector}</option>
        ))}
      </select>
      <button disabled={!search}>Search</button>
    </form>
  );
}
}