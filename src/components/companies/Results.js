import React, { Component } from 'react';
import Companies from './companies';
import qs from 'query-string';
import PropTypes from 'prop-types';
// import Paging from '../paging';
import { getSectorData, getStockData } from '../../services/iextradingAPI';

export default class Results extends Component {

  state = {
    search: '',
    results: null,
    page: 0
  };

  static propTypes = {
    location: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.searchStocks();
  }

  get searchTerm() {
    const { location } = this.props;
    const { search } = qs.parse(location.search);
    return search;
  }

  searchStocks() {
    const search = this.searchTerm;
    if(!search) return;

    if(search.length > 5) {
      getSectorData(search)
        .then(companies => {
          console.log('ALL COMPANIES', companies);
          let pages = [];
          for(let i = 0; i < companies.length; i += 25) {
            let chunk = companies.slice(i, i + 25);
            pages.push(chunk);
          }
          console.log('CHUNKS FOR EACH PAGE', pages);
          this.setState({ results: pages });
        });
    }
    // else {
    //   getStockData(search)
    //     .then(company => {
    //       console.log('ONE COMPANY', company);
    //       this.setState({ results: company });
    //     });
    // }


  }

 
  render() {
    const { results } = this.state;

    return (
      <Companies results={results}/> 
    );
  }
}
