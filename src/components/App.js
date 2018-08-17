import React, { Component } from 'react';
import Header from './Header';
import Companies from './companies/Companies';
import Paging from './Paging';
import { getStockData } from '../services/iextradingAPI';
class App extends Component {

  state = {
    sector: '',
    companies: [],
    search: []
  };

  handleSearch = (sector) => {
    this.setState({ sector }, () => {
      getStockData(this.state.sector)
        .then(companies => {
          console.log(companies);
          this.setState({ companies });
          
        });
    });
  };

  handlePaging(chunkSize) {
    const { companies, search } = this.state;
    search.length = 0;
    for(let i = 0; i < companies.length; i += chunkSize) {
      let chunk = companies.slice(i, i + chunkSize);
      search.push(chunk);
    }
    this.setState({ search });
    console.log(search);
  }

  render() {

    const { companies, sector, searchResults } = this.state;

    return (
      <main>
        <section>
          <h2>SUPER REACT</h2>
          <button onClick={() => this.handlePaging(10)}>Click</button>
        </section>
        <section>
          <Header onSearch={this.handleSearch} sector={sector}/>
        </section>
        
        <section>
          <Companies companies={companies}/>
        </section>

        <section>
          <Paging onPaging={this.handlePaging} searchResults={searchResults}/>
        </section>
      </main>
    );
  }
}

export default App;