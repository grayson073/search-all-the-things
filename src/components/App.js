import React, { Component } from 'react';
import Header from './Header';
import { getStockData } from '../services/iextradingAPI';
class App extends Component {

  handleSearch = (sector) => {
    getStockData(sector);
  };

  render() {

    return (
      <main>
        <section>
          <h2>SUPER REACT</h2>
        </section>
        <section>
          Here is the header section:
          <Header onSearch={this.handleSearch}/>
        </section>
      </main>
    );
  }
}

export default App;