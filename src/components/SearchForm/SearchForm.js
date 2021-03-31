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
      <Checkbox
        name="check"
        mix="search-form__checkbox"
        caption="Короткометражки"
      />
    </section>
  );
}

export default SearchForm;
