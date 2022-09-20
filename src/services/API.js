import axios from 'axios';

// /search/movie?api_key={api_key}&query=Jack+Reacher
// https://api.themoviedb.org/3/movie/550?api_key=53f28f10fb3650af7c7f4f04a387344f

// https://api.themoviedb.org/3/movie/1/credits?api_key=53f28f10fb3650af7c7f4f04a387344f&language=en-US

// const BASE_URL = 'https://api.themoviedb.org/3';
// const KEY = '53f28f10fb3650af7c7f4f04a387344f';

// axios.defaults.baseURL = 'https://api.themoviedb.org/3/trending/all/day?api_key=53f28f10fb3650af7c7f4f04a387344f';

export const fetchTrendingFilms = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/all/day?api_key=53f28f10fb3650af7c7f4f04a387344f`
  );

  return response;
};

// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false

export const fetchQueryFilms = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=53f28f10fb3650af7c7f4f04a387344f&language=en-US&page=1&include_adult=false&query=dance`
  );

  return response;
};
