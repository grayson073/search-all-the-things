import React, { Component } from 'react';
import money from './money.png';
import styles from './Home.css';


export default class Home extends Component {

  render() {

    return (
      <div className={styles.home}>
        <img src={money}/>
      </div>
    );
  }
}
