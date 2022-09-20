import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import style from './FilmSearch.module.css';

const FilmsSearch = ({ onSubmit }) => {
  const [searchParams, setSearchParams] = useSearchParams('');
  const name = searchParams.get('query');
  const [value, setValue] = useState(name ?? '');
  console.log(name);

  const handleChangeValue = event => {
    setValue(event.target.value.trim());
  };

  const onSubmitValue = ev => {
    ev.preventDefault();

    if (value === '') {
      return toast('Ведите свой запрос');
    }
    setSearchParams(state => ({ ...state, query: value }));
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
            // autoComplete="off"
            // autoFocus="off"
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
