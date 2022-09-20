import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
// import Loader from '../../components/Loader/Loader';
import s from './Cast.module.css';
import axios from 'axios';

const Cast = () => {
  const { moviesId } = useParams();
  const [cast, setCast] = useState([]);
  // const [loader, setLoader] = useState(false);

  const serviceApi = useCallback(async () => {
    try {
      // setLoader(true);
      const response = await axios
        .get(
          `https://api.themoviedb.org/3/movie/${moviesId}/credits?api_key=53f28f10fb3650af7c7f4f04a387344f&language=en-US`
        )
        .then(r => r.data);

      setCast(response.cast);
    } catch (error) {
      // toast.error('Что то пошло не так :(');
    } finally {
      // setLoader(false);
    }
  }, [moviesId]);

  useEffect(() => {
    serviceApi();
  }, [serviceApi]);


  if (!cast.length) {
    return <p className={s.title}>Sorry</p>;
  }

  return (
    <>
      {
        <ul className={s.list}>
          {cast.map(actor => (
            <li key={actor.id}>
              <div className={s.thumb}><img
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                width="170"
                alt={actor.name} className={s.img}
              /></div>
              <h3 className={s.title}>{actor.name}</h3>
              <p className={s.text}>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      }
    </>
  );
};

export default Cast;

// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US
