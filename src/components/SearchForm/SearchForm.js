import "./SearchForm.css";
import Button from "../generic/Button/Button";
import Checkbox from "../generic/Checkbox/Checkbox";

function SearchForm({ onSearch }) {
  return (
    <section className="search-form">
      <form className="search-form__form" onSubmit={onSearch}>
        <label className="search-form__label">
          <span className="search-form__icon" />
          <input
            type="text"
            className="search-form__input"
            placeholder="Фильм"
          />
          <span className="search-form__input-error"></span>
        </label>
        <Button type="submit" value="Найти" modType="search" />
      </form>
      <div className="search-form__checkbox">
        <Checkbox name="check" />
        <p className="search-form__text">Короткометражки</p>
      </div>
    </section>
  );
}

export default SearchForm;
