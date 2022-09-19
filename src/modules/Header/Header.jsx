import { NavLink, Outlet } from 'react-router-dom';
import s from '../Header/header.module.css';

const getActiveClassName = ({ isActive }) => {
  return isActive ? `${s.item} ${s.active}` : s.item;
};

const Header = () => {
  return (
    <>
      <header className={s.header}>
        <div className={s.wrapper}>
          <nav className={s.nav}>
            <NavLink to="/home" className={getActiveClassName}>
              Home
            </NavLink>
            <NavLink to="/movies" className={getActiveClassName}>
              Movies
            </NavLink>
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Header;
