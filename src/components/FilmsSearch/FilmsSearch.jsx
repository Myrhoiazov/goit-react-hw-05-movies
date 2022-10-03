import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import style from './FilmSearch.module.css';

const FilmsSearch = ({ onSubmitValue }) => {
  const [searchParams, setSearchParams] = useSearchParams('');
  const name = searchParams.get('query');
  const [value, setValue] = useState(name ?? '');

  const handleChangeValue = event => {
    const cleanValue = event.target.value.trim();

    setValue(cleanValue);
    setSearchParams(cleanValue === '' ? {} : { query: cleanValue });
  };


  return (
    <>
      <header className={style.searchbar}>
        <form className={style.form} onSubmit={onSubmitValue}>
          <button type={style.btn} className={style.btn}>
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
