import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Paging extends Component {

  static propTypes = {
    page: PropTypes.number,
    perPage: PropTypes.number,
    totalResults: PropTypes.number
  };

  render() {
    return (
      <div>
        <button>Previous</button>
        <button>Next</button>
      </div>
    );
  }
}
