import React, { Component } from 'react';
import Header from './Header';
import Companies from './companies/Companies'
import { getStockData } from '../services/iextradingAPI';
class App extends Component {

  state = {
    companies: []
  };

  handleSearch = (sector) => {
    getStockData(sector)
      .then(companies => this.setState({ companies }));
  };

  render() {

    const { companies } = this.state;

    return (
      <main>
        <section>
          <h2>SUPER REACT</h2>
        </section>
        <section>
          Here is the header section:
          <Header onSearch={this.handleSearch}/>
        </section>
        
        <section>
          <Companies companies={companies}/>
        </section>
      </main>
    );
  }
}

export default App;