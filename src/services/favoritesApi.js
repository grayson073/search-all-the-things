import { put, get, del } from './requrest';

const URL = '';
const FAVORITES_URL= `${URL}/favorites`;

const getFavoriteUrl = id => `${FAVORITES_URL}/id-${id}.json`;

export const addFavorite = ({ id, name }) => {
  const url = getFavoriteUrl(id);
  return put(url, {
    id, name
  });
};