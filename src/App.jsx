import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './modules/Header';
// import AboutFilms from './pages/AboutFilms';
import Cast from './pages/AboutFilms/Cast';
import Reviews from 'pages/AboutFilms/Reviews';

const HomePage = lazy(() => import('./pages/Home'));
const MoviesPage = lazy(() => import('./pages/Movies'));
const AboutFilmsPage = lazy(() => import('./pages/AboutFilms'));

export const App = () => {
  return (
    <BrowserRouter basename="goit-react-hw-05-movies">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:moviesId" element={<AboutFilmsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
};