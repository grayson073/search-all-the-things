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
    page: 1,
    loading: false,
    error: null
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
    const { page: oldPage } = qs.parse(location.search);
    if(oldPage !== this.pageNumber) this.setState({ page: this.pageNumber });
    if(oldSearch === this.searchTerm) return;
    this.searchStocks();
  }

  handlePaging = (page) => {
    const { history } = this.props;
    const { search } = this.state;
    this.setState({ page }, () => {
      history.push({
        pathname: '/companies',
        search: qs.stringify({ search, page })
      });
    });
  };

  get searchTerm() {
    const { location } = this.props;
    const { search } = qs.parse(location.search);
    return search;
  }

  get pageNumber() {
    const { location } = this.props;
    const { page } = qs.parse(location.search);
    return page;
  }

  searchStocks() {
    const search = this.searchTerm;
    const page = this.pageNumber;
    this.setState({ page });
    if(!search) return;

    this.setState({
      loading: true,
      error: null
    });

    getSectorData(search)
      .then(companies => {
        let pages = [];
        for(let i = 0; i < companies.length; i += 25) {
          let chunk = companies.slice(i, i + 25);
          pages.push(chunk);
        }
        this.setState({ results: pages, search });
      },
      err => {
        this.setState({ error: err.message });
      }
      )
      .then(() => {
        this.setState({ loading: false });
      });

  }
 
  render() {
    const { results, page, loading, error } = this.state;

    return (
      <div>
        {(loading || error) &&
          <section className="notifications">
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
          </section>
        }
        {results ?
          <div>
            <Paging 
              onPage={this.handlePaging} 
              page={+page} 
              results={results}
            />
            <Companies 
              results={results} 
              page={+page}
            />
          </div>
          : <span>Please select a sector and click search...</span>
        }
      </div>
    );
  }
}
