import axios from 'axios';

export const client = axios.create({
  baseURL: 'https://api.punkapi.com/v2',
});
