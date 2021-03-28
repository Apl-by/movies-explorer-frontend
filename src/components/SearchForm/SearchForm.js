import "./SearchForm.css";
import Form from "../generic/Form/Form";
import InputSearch from "../generic/inputs/InputSearch/InputSearch";
import Button from "../generic/Button/Button";
import Checkbox from "../generic/Checkbox/Checkbox";

function SearchForm({ onSubmit }) {
  return (
    <section className="search-form">
      <Form modType="search" onSubmit={onSubmit}>
        <InputSearch type="text" name="search" placeholder="Фильм" />
        <Button type="submit" value="Найти" modType="search" />
      </Form>
      <div className="search-form__checkbox">
        <Checkbox name="check" />
        <p className="search-form__text">Короткометражки</p>
      </div>
    </section>
  );
}

export default SearchForm;
