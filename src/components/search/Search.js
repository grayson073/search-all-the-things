import React, { Component } from 'react';

export default class Search extends Component {

  state = {
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

  render() {

    return (
      <form>
        <label>
          Select a sector:
          <select>
            <option></option>
          </select>
        </label>
      </form>
    );

  }

}