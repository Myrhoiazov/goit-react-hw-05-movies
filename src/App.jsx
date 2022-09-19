import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './modules/Header';
import Home from './pages/Home';
import Movies from './pages/Movies';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/home" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
};
