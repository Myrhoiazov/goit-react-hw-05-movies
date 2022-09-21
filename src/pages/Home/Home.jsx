import { useState, useEffect, useCallback } from 'react';
import { toast } from 'react-toastify';
import Loader from '../../components/Loader/Loader';
import Modal from '../../components/Modal';
import s from './Home.module.css';
import axios from 'axios';

const Home = () => {
  const [films, setFilms] = useState([]);
  const [loader, setLoader] = useState(false);
  const [filmCard, setFilmsCard] = useState('');

  console.log(films);

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

  const isShowModal = ev => {
    setFilmsCard(ev);
  };

  useEffect(() => {
    serviceApi();
  }, [serviceApi]);

  return (
    <>
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
            <li
              key={film.id}
              onClick={() =>
                isShowModal(
                  `https://image.tmdb.org/t/p/w500${film.poster_path}`
                )
              }
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${film.backdrop_path}`}
                width="350"
                alt={film.title}
              />
              <p>{film.original_title || film.original_name}</p>
            </li>
          ))}
        </ul>
      }

      {filmCard && (
        <Modal onClose={isShowModal}>
          <article>
            <div className="container">
              <div className={s.card}>
                <div className="thumb__photo">
                  <img className='photo'
                    src={filmCard}
                    alt=""
                    style={{
                      display: 'block',
                      objectFit: 'cover',
                      // maxWidth: '100%',
                      // width: '100%',
                      // height: '100%',
                    }}
                  />
                </div>
                <div className='data__content'>
                  <h1>Title</h1>
                  <p>text</p>
                </div>
              </div>
            </div>
          </article>
        </Modal>
      )}
    </>
  );
};

export default Home;
