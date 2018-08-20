import { put, get, del } from './request';

const URL = 'https://alchemy-lab-965b5.firebaseio.com';
const FAVORITES_URL = `${URL}/favorites`;

const getFavoriteUrl = id => `${FAVORITES_URL}/id-${id}.json`;

export const addFavorite = ({ symbol, companyName }) => {
  const url = getFavoriteUrl(symbol);
  return put(url, { symbol, companyName });
};

export const getFavorites = () => {
  return get(`${FAVORITES_URL}.json`)
    .then(response => {
      return Object.keys(response)
        .map(key => response[key]);
    });
};

export const getFavorite = symbol => {
  const url = getFavoriteUrl(symbol);
  return get(url);
};

export const removeFavorite = symbol => {
  const url = getFavoriteUrl(symbol);
  return del(url);
};

