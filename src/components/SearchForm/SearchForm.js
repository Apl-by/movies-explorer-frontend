import "./SearchForm.css";
import Form from "../generic/Form/Form";
import InputSearch from "../generic/inputs/InputSearch/InputSearch";
import Button from "../generic/Button/Button";
import Checkbox from "../generic/Checkbox/Checkbox";
import useForm from "../../hooks/useForm";
import { defaultErr } from "./data";
import { useState } from "react";

function SearchForm({ onSubmit }) {
  const [error, setError] = useState("");
  const {
    values: { search: value = "" },
    errors: { search: err = defaultErr },
    handleChange,
  } = useForm();

  const handleSubmit = (e) => {
    e.preventDefault();

    setError(err);
    if (err !== "") return;

    onSubmit(value.trim());
  };

  return (
    <section className="search-form">
      <Form modType="search" onSubmit={handleSubmit} noValidate={true}>
        <InputSearch
          type="search"
          name="search"
          value={value}
          placeholder="Фильм"
          required={true}
          maxLength="100"
          onChange={handleChange}
          error={error}
        />
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
