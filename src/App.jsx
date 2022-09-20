import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './modules/Header';
import Home from './pages/Home';
import Movies from './pages/Movies';
import AboutFilms from './pages/AboutFilms';
import Cast from './pages/AboutFilms/Cast'
import Reviews from 'pages/AboutFilms/Reviews';

export const App = () => {
  return (
    <BrowserRouter basename="goit-react-hw-05-movies">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:moviesId" element={<AboutFilms />}>
            <Route path='cast' element={<Cast/>}/>
            <Route path='reviews' element={<Reviews/>}/>
          </Route>
          <Route path='*' element={<Navigate to='/'/>}/>
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
};
