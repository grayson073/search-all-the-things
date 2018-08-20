import React, { Component } from 'react';
// import { getFavorites } from '../../services/favoritesApi';
import Favorite from './Favorite';

export default class componentName extends Component {
    state= {
      favorites: null
    }

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
        <ul>
          {favorites.map(favorite => {
            return <Favorite key={favorite.id} stock={favorite}/>;
          })}
        </ul>
      );
    }
}
