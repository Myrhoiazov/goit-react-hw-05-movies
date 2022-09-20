import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/'
const KEY = 'api_key=53f28f10fb3650af7c7f4f04a387344f'

export const fetchTrendingFilms = async () => {
  const response = await axios.get(
    `${BASE_URL}trending/all/day?${KEY}`
  );

  return response;
};

export const fetchQueryFilms = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=53f28f10fb3650af7c7f4f04a387344f&language=en-US&page=1&include_adult=false&query=dance`
  );

  return response;
};
