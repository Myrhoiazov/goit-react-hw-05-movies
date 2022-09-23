import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import Header from '../../modules/Header';
import Loader from '../../components/Loader/Loader';
import Modal from '../../components/Modal';
import s from './Home.module.css';
import axios from 'axios';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const Home = () => {
  const [films, setFilms] = useState([]);
  const [loader, setLoader] = useState(false);
  const [filmCard, setFilmsCard] = useState({});
  const [isShow, setIsShow] = useState(false);

  const location = useLocation();

  const serviceApi = useCallback(async () => {
    try {
      setLoader(true);
      const response = await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=53f28f10fb3650af7c7f4f04a387344f`
      );
      setFilms(response.data.results);
    } catch (error) {
      toast.error('Что то пошло не так :(');
    } finally {
      setLoader(false);
    }
  }, []);

  const isShowModal = film => {
    setFilmsCard(film);
    setIsShow(state => !state);
  };

  useEffect(() => {
    serviceApi();
  }, [serviceApi, filmCard]);

  return (
    <div className={isShow ? s.hidden : null}>
      <Header />
      <div className={s.wrapper}>
        <div className={s.hero}>
          <h1 className={s.title}>Trending Film today</h1>
          <p className={s.text}>
            Добро пожаловать. Миллионы фильмов, сериалов и людей. Исследуйте
            сейчас.
          </p>
        </div>

        {loader && <Loader />}
        {
          <ul className={s.list}>
            {films.map(film => (
              <li key={film.id} onClick={() => isShowModal(film)}>
                <div className={s.list__thumb}>
                  <img
                    className={s.list__img}
                    src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                    width="230"
                    alt={film.title}
                  />
                </div>
                <p className={s.list__title}>
                  {film.original_title || film.original_name}
                </p>
              </li>
            ))}
          </ul>
        }
      </div>

      {isShow && (
        <Modal onClose={isShowModal}>
          <article className={s.modal__container}>
            <AiOutlineCloseCircle
              className={s.btn__close}
              onClick={() => setIsShow(state => !state)}
            />
            <div>
              <div className={s.card}>
                <div className={s.thumb__photo}>
                  <img
                    className={s.photo}
                    src={`https://image.tmdb.org/t/p/w500${filmCard.poster_path}`}
                    alt=""
                  />
                </div>
                <div className={s.data__content}>
                  <h1 className={s.modal__title}>
                    {filmCard.name || filmCard.title}
                  </h1>
                  <p className={s.modal__text}>
                    {' '}
                    <span className={s.modal__text_accent}>Overview: </span>
                    {filmCard.overview}
                  </p>
                  <p className={s.list__text}>
                    <span className={s.modal__text_accent}>Rating: </span>
                    {Math.round(filmCard.vote_average)}
                  </p>
                  <p className={s.list__text}>
                    <span className={s.modal__text_accent}>Popularity: </span>
                    {filmCard.popularity}
                  </p>
                  <Link
                    className={s.button}
                    type="button"
                    to={`/movies/${filmCard.id}`}
                    state={{ from: location }}
                  >
                    Reed More...
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </Modal>
      )}
    </div>
  );
};

export default Home;
