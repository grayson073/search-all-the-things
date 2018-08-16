import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
  onSearch: PropTypes.func.isRequired
};

handleSectorSelect = (search) => {
  this.setState({ search });
};

handleSubmit = event => {
  event.preventDefault();
  this.props.onSearch(this.state.search);
}

render() {

  const { sectors } = this.state;

  return (
    <form className="search-form" onSubmit={event => this.handleSubmit(event)}>
      <select onChange={({ target }) => this.handleSectorSelect(target.value)}>
        <option value="" >Select a sector:</option>
        {sectors.map(sector => (
          <option key={sector} value={sector}>{sector}</option>
        ))}
      </select>
      <button>Search</button>
    </form>
  );
}
}