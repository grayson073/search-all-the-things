import React, { Component } from 'react';
import Header from './Header';
import Companies from './companies/Companies';
import { getStockData } from '../services/iextradingAPI';
class App extends Component {

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

    const { results, sector } = this.state;

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
      </main>
    );
  }
}

export default App;