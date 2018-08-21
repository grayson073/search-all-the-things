import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './News.css';

export default class Companies extends Component {

  static propTypes = {
    article: PropTypes.object.isRequired
  };

  render() {

    const { article } = this.props;
    const { datetime, headline, summary, url } = article;

    return (
      <li className={styles.news}>
        <p>{datetime}</p>
        <p>{headline}</p>
        <p>{summary}</p>
        <p><a href={url} target="blank">(Article Link)</a></p>
      </li>
    );
  }

}