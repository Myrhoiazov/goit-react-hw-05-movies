import FilmsSearch from '../../components/FilmsSearch/FilmsSearch';
import { useState, useCallback, useEffect } from 'react';
import Loader from 'components/Loader';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import s from './Movies.module.css';

// https://api.themoviedb.org/3/movie/${movie_id}?api_key=53f28f10fb3650af7c7f4f04a387344f&language=en-US

const Movies = () => {
  const [query, setQuery] = useState('');
  const [searchFilms, setSearchFilms] = useState([]);
  const [loader, setLoader] = useState(false);

  const serviceApi = useCallback(async () => {
    try {
      setLoader(true);
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=53f28f10fb3650af7c7f4f04a387344f&language=en-US&page=1&include_adult=false&query=${query}`
      );
      setSearchFilms(response.data.results);
    } catch (error) {
      toast.error('Что то пошло не так :(');
    } finally {
      setLoader(false);
    }
  }, [query]);

  const handelSearchValue = query => {
    setQuery(query);
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    serviceApi();
  }, [query, serviceApi]);

  return (
    <>
      <FilmsSearch onSubmit={handelSearchValue} />
      {loader && <Loader />}
      {
        <ul className={s.list}>
          {searchFilms.map(film => (
            <Link className={s.link} key={film.id} to={`${film.id}`}>
              <div className={s.wrapper}>
                <img
                  className={s.image}
                  src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                  width="230"
                  alt={film.title}
                />
              </div>
              <p className={s.title}>
                Title: {film.original_title || film.original_name}
              </p>
            </Link>
          ))}
        </ul>
      }
    </>
  );
};

export default Movies;
