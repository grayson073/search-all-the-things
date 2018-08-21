import React, { Component } from 'react';
import { getFavorites } from '../../services/favoritesApi';
import Favorite from './Favorite';
import styles from './Favorites.css';

export default class componentName extends Component {
    state= {
      favorites: null
    };

    componentDidMount() {
      getFavorites()
        .then(favorites => {
          this.setState({ favorites });
        })
        .catch(console.log);
    }

    render() {
      const { favorites } = this.state;
      if(!favorites) return null;

      return (
        <div className={styles.favorites}>
          <h2>Current favorites:</h2>
          <ul>
            {favorites.map(favorite => {
              return <Favorite key={favorite.symbol} company={favorite}/>;
            })}
          </ul>
        </div>
      );
    }
}
