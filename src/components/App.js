import React, { Component } from 'react';
import Header from './Header';
import Companies from './companies/Companies';
import { getStockData } from '../services/iextradingAPI';
class App extends Component {

  state = {
    sector: '',
    companies: []
  };

  handleSearch = (sector) => {
    this.setState({ sector }, () => {
      getStockData(this.state.sector)
        .then(companies => this.setState({ companies }));
    });
  };

  render() {

    const { companies, sector } = this.state;

    return (
      <main>
        <section>
          <h2>SUPER REACT</h2>
        </section>
        <section>
          <Header onSearch={this.handleSearch} sector={sector}/>
        </section>
        
        <section>
          <Companies companies={companies}/>
        </section>
      </main>
    );
  }
}

export default App;