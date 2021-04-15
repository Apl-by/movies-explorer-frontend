import "./SearchForm.css";
import Form from "../generic/Form/Form";
import InputSearch from "../generic/inputs/InputSearch/InputSearch";
import Button from "../generic/Button/Button";
import Checkbox from "../generic/Checkbox/Checkbox";
import useForm from "../../hooks/useForm";
import { defaultErr } from "./data";
import { useState, useEffect } from "react";

function SearchForm({ onSubmit, parent }) {
  const [isChecked, setIsChecked] = useState(false);
  const [wasCheck, setWasCheck] = useState(false);
  const [submitedInput, setSubmitedInput] = useState("");
  const [error, setError] = useState("");
  const {
    values: { search: value = "" },
    errors: { search: err = defaultErr },
    handleChange,
  } = useForm();

  useEffect(() => {
    if (wasCheck && parent) {
      onSubmit(value.trim(), isChecked);
      setWasCheck(false);
      return;
    }

    if (!submitedInput || !wasCheck) return;
    onSubmit(value.trim(), isChecked);
    setWasCheck(false);
  }, [isChecked, submitedInput, wasCheck, onSubmit, value, parent]);

  const handleCheckBox = () => {
    setIsChecked(!isChecked);
    setWasCheck(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError(err);
    if (err !== "") return;

    onSubmit(value.trim(), isChecked);
    setSubmitedInput(value.trim());
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
        onChange={handleCheckBox}
        isChecked={isChecked}
      />
    </section>
  );
}

export default SearchForm;
