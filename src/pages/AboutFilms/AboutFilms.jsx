import { useState, useEffect, useCallback } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import Loader from '../../components/Loader';
import axios from 'axios';
import { toast } from 'react-toastify';
import s from './AboutFilms.module.css';

const AboutFilms = () => {
  const { moviesId } = useParams();
  const [films, setFilms] = useState({});
  const [loader, setLoader] = useState(false);

  const serviceApi = useCallback(async () => {
    try {
      setLoader(true);
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${moviesId}?api_key=53f28f10fb3650af7c7f4f04a387344f&language=en-US`
      );
      setFilms(response.data);
      console.log(response.data);
    } catch (error) {
      toast.error('Что то пошло не так :(');
    } finally {
      setLoader(false);
    }
  }, [moviesId]);

  useEffect(() => {
    if (!films) {
      return;
    }

    serviceApi();
  }, []);

  if (Object.keys(films).length === 0) {
    return;
  }

  const genres = films.genres.map(el => el.name).join(', ');

  return (
    <>
      {loader && <Loader />}
      {
        <section className="">
          <div className={s.container}>
            <div className={s.about}>
              <img
                alt={films.title}
                className={s.img}
                width="300"
                src={`https://image.tmdb.org/t/p/w500${films.poster_path}`}
              />
              <div className={s.data}>
                <h1>
                  {films.title} {}
                </h1>
                <h3>Overview</h3>
                <p>{films.overview}</p>
                <h3>Genres:</h3>
                <p>{genres}</p>
              </div>
            </div>
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
            <Outlet />
          </div>
        </section>
      }
    </>
  );
};

export default AboutFilms;
