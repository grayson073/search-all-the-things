import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getStockData } from '../../services/iextradingAPI';

export default class CompanyDetail extends Component {

  state = {
    company: null
  };

  static propTypes = {
    match: PropTypes.object.isRequired
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    
    getStockData(id)
      .then(company => {
        console.log('ONE COMPANY', company);
        this.setState({ company: company });
      });
  }



  render() {
    const { company } = this.state;
    if(!company) return null;
    
    return (
      <p>CEO: {company.company.CEO}</p>
    );
  }
}
