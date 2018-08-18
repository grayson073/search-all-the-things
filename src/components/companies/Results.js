import React, { Component } from 'react';
import Companies from './companies';
// import Paging from '../paging';
import { getStockData } from '../../services/iextradingAPI';

export default class Results extends Component {

  state = {
    sector: '',
    results: null,
    page: 0
   
  };

  handleSearch = (sector) => {
    this.setState({ sector }, () => {
      getStockData(this.state.sector)
        .then(results => {
          console.log('ALL RESULTS', results);
          let pages = [];
          for(let i = 0; i < results.length; i += 25) {
            let chunk = results.slice(i, i + 25);
            pages.push(chunk);
          }
          console.log('CHUNKS FOR EACH PAGE', pages);
          this.setState({ results: pages });
        });
    });
  };
 
  render() {
    return (
      <Companies onSearch={this.handleSearch}/> 
    );
  }
}
