import { NavLink, useLocation } from 'react-router-dom';
import Sidebar from 'components/light-dark/Sidebar';
import s from '../Header/header.module.css';

const getActiveClassName = ({ isActive }) => {
  return isActive ? `${s.item} ${s.active}` : s.item;
};

const Header = () => {
  return (
    <div>
      <header className={s.header}>
        <div className={s.wrapper}>
          <nav className={s.nav}>
            <Sidebar />

            <div>
              <NavLink to='/' end className={getActiveClassName}>
                Home
              </NavLink>
              <NavLink
                to="/movies"
                className={getActiveClassName}
              >
                Movies
              </NavLink>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
