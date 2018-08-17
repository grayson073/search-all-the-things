import React, { Component } from 'react';
import Header from './Header';
import Companies from './companies/Companies';
import Paging from './Paging';
import { getStockData } from '../services/iextradingAPI';
class App extends Component {

  state = {
    sector: '',
    results: null,
   
  };

  handleSearch = (sector) => {
    this.setState({ sector }, () => {
      getStockData(this.state.sector)
        .then(results => {
          let pages = [];
          for(let i = 0; i < results.length; i += 25) {
            let chunk = results.slice(i, i + 25);
            pages.push(chunk);
          }
          this.setState({ results: pages });  
        });
    });
  
  };

  render() {

    const { results, sector, searchResults } = this.state;

    return (
      <main>
        <section>
          <h2>SUPER REACT</h2>
        </section>
        <section>
          <Header onSearch={this.handleSearch} sector={sector}/>
        </section>
        
        <section>
          <Companies results={results}/>
        </section>

        <section>
          <Paging onPaging={this.handlePaging} searchResults={searchResults}/>
        </section>
      </main>
    );
  }
}

export default App;