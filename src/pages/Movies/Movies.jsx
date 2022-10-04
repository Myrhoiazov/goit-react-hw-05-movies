import FilmsSearch from '../../components/FilmsSearch/FilmsSearch';
import { useState, useEffect } from 'react';
import Loader from 'components/Loader';
import Header from '../../modules/Header';
import axios from 'axios';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import s from './Movies.module.css';

const Movies = () => {
  const [searchParams] = useSearchParams('');
  const query = searchParams.get('query') ?? '';
  const location = useLocation();

  const [searchFilms, setSearchFilms] = useState([]);
  const [loader, setLoader] = useState(false);

  const serviceApi = async () => {
    try {
      setLoader(true);
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=53f28f10fb3650af7c7f4f04a387344f&language=en-US&page=1&include_adult=false&query=${query}`
      );
      if(response.data.results.length === 0){
        toast.error('По вашему запросу ничего не найдено :(');
      }
      setSearchFilms(response.data.results);
    } catch (error) {
      toast.error('Что то пошло не так :(');
    } finally {
      setLoader(false);
    }
  };

  const onSubmitValue = ev => {
    ev.preventDefault();

    const cleanValue = ev.target.elements.name.value.trim();

    if (!cleanValue) {
      return toast('Ведите свой запрос');
    }

    serviceApi();
  };

  useEffect(() => {
    if (!query) {
      return;
    }

    serviceApi();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Header />
      <div className={s.wrapper}>
        <FilmsSearch onSubmitValue={onSubmitValue} />
        {loader && <Loader />}
        {
          <ul className={s.list}>
            {searchFilms.map(film => (
              <Link
                className={s.link}
                key={film.id}
                to={`/movies/${film.id}`}
                state={{ from: location }}
              >
                <div className={s.image__wrapper}>
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
      </div>
    </>
  );
};

export default Movies;
