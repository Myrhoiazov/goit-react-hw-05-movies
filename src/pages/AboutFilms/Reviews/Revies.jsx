import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
// import Loader from '../../components/Loader/Loader';
import s from './Reviews.module.css';
import axios from 'axios';

const Reviews = () => {
  const { moviesId } = useParams();
  const [reviews, setReviews] = useState([]);
  // const [loader, setLoader] = useState(false);

  const serviceApi = useCallback(async () => {
    try {
      // setLoader(true);
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${moviesId}/reviews?api_key=53f28f10fb3650af7c7f4f04a387344f&language=en-US`
      );
      setReviews(response.data.results);
    } catch (error) {
      // toast.error('Что то пошло не так :(');
    } finally {
      // setLoader(false);
    }
  }, [moviesId]);

  useEffect(() => {
    serviceApi();
  }, [serviceApi]);

  if (!reviews.length) {
    return <p className={s.text}>Sorry</p>;
  }

  return (
    <ul className={s.list}>
      {reviews.map(rev => (
        <li key={rev.created_at}>
          <p className={s.text}> <span className={s.text__accent}>Character:</span>{rev.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
