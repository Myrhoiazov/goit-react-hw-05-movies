import { useState } from 'react';
import { toast } from 'react-toastify';
import style from './FilmSearch.module.css';

const FilmsSearch = ({onSubmit}) => {
  const [value, setValue] = useState('');

  const handleChangeValue = event => {
    setValue(event.target.value.trim());
  };

  const onSubmitValue = ev => {
    ev.preventDefault();

    if (value === '') {
      return toast('Ведите свой запрос');
    }

    onSubmit(value);
  };

  return (
    <>
      <header className={style.searchbar}>
        <form className="form" onSubmit={onSubmitValue}>
          <button type="submit" className={style.btn}>
            <span className="button-label">Search</span>
          </button>

          <input
            className={style.input}
            type="text"
            autoComplete="off"
            autoFocus="off"
            name="name"
            value={value}
            placeholder="Search movies"
            onChange={handleChangeValue}
          />
        </form>
      </header>
    </>
  );
};

export default FilmsSearch;

