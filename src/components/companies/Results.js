import React, { Component } from 'react';
import Companies from './companies';
import qs from 'query-string';
import PropTypes from 'prop-types';
import Paging from '../paging/Paging';
import { getSectorData } from '../../services/iextradingAPI';

export default class Results extends Component {

  state = {
    search: '',
    results: null,
    page: 0,
  };

  static propTypes = {
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.searchStocks();
  }

  componentDidUpdate({ location }) {
    const { search: oldSearch } = qs.parse(location.search);
    if(oldSearch === this.searchTerm) return;
    this.searchStocks();
  }

  handlePaging = (page) => {
    this.setState(page);
  };

  get searchTerm() {
    const { location } = this.props;
    const { search } = qs.parse(location.search);
    return search;
  }

  searchStocks() {
    const search = this.searchTerm;
    if(!search) return;

    getSectorData(search)
      .then(companies => {
        let pages = [];
        for(let i = 0; i < companies.length; i += 25) {
          let chunk = companies.slice(i, i + 25);
          pages.push(chunk);
        }
        this.setState({ results: pages, search });
      });
  }
 
  render() {
    const { results, page } = this.state;

    return (
      <div>
        {results ?
          <div>
            <Paging onPage={this.handlePaging} page={page} results={results}/>
            <Companies results={results} page={page}/>
          </div>
          : <p>Please select a sector and click search...</p>
        }
      </div>
    );
  }
}
