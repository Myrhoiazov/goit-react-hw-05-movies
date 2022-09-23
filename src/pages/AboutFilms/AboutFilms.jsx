import { useState, useEffect, useCallback, Suspense } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import Header  from '../../modules/Header';
import Loader from '../../components/Loader';
import axios from 'axios';
import { toast } from 'react-toastify';
import s from './AboutFilms.module.css';

const AboutFilms = () => {
  const { moviesId } = useParams();
  const [film, setFilm] = useState({});
  const [loader, setLoader] = useState(false);
  const location = useLocation();

  const serviceApi = useCallback(async () => {
    try {
      setLoader(true);
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${moviesId}?api_key=53f28f10fb3650af7c7f4f04a387344f&language=en-US`
      );

      setFilm(response.data);
    } catch (error) {
      toast.error('Что то пошло не так :(');
    } finally {
      setLoader(false);
    }
  }, [moviesId]);

  useEffect(() => {
    serviceApi();
  }, [serviceApi]);

  if (Object.keys(film).length === 0) {
    return;
  }

  const genres = film.genres.map(el => el.name).join(', ');

  return (
    <>
      {loader && <Loader />}
      <Header/>
      {
        <section>
          <div className={s.container}>
            <Link to={location.state?.from ?? '/movies'} className={s.button}>
              {' '}
              go back
            </Link>
            <div className={s.about}>
              <img
                alt={film.title}
                className={s.img}
                width="300"
                src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
              />
              <div className={s.data}>
                <h1>
                  {film.title} {}
                </h1>
                <h3>Overview</h3>
                <p>{film.overview}</p>
                <h3>Genres:</h3>
                <p>{genres}</p>
              </div>
            </div>
            <ul className={s.data__review}>
              <li className={s.data__item}>
                <Link
                  className={s.title}
                  to="cast"
                  state={location.state?.from ? location.state : null}
                >
                  Cast
                </Link>
              </li>
              <li className={s.data__item}>
                <Link
                  className={s.title}
                  to="reviews"
                  state={location.state?.from ? location.state : null}
                >
                  Reviews
                </Link>
              </li>
            </ul>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </div>
        </section>
      }
    </>
  );
};

export default AboutFilms;
