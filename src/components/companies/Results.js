import React, { Component } from 'react';
import Companies from './companies';
import qs from 'query-string';
import PropTypes from 'prop-types';
// import Paging from '../paging';
import { getStockData } from '../../services/iextradingAPI';

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

    getStockData(search)
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

  // handleSearch = (sector) => {
  //   this.setState({ sector }, () => {
  //     getStockData(this.state.sector)
  //       .then(companies => {
  //         console.log('ALL COMPANIES', companies);
  //         let pages = [];
  //         for(let i = 0; i < companies.length; i += 25) {
  //           let chunk = companies.slice(i, i + 25);
  //           pages.push(chunk);
  //         }
  //         console.log('CHUNKS FOR EACH PAGE', pages);
  //         this.setState({ companies: pages });
  //       });
  //   });
  // };
 
  render() {
    const { results } = this.state;

    return (
      <Companies results={results}/> 
    );
  }
}
