import { useState, useCallback } from "react";
import isEmail from "validator/lib/isEmail";

function useForm() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    const browserErr = target.validationMessage;

    if (name === "email" && (!browserErr || target.validity.customError)) {
      isEmail(value)
        ? target.setCustomValidity("")
        : target.setCustomValidity("Некорректный адрес электронной почты");
    }

    if (name === "search") {
      target.validity.valueMissing
        ? target.setCustomValidity("Нужно ввести ключевое слово")
        : target.setCustomValidity("");
    }

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };

  const resetForm = useCallback(() => {
    setValues({});
    setErrors({});
    setIsValid({});
  }, [setValues, setErrors, setIsValid]);

  return { values, errors, isValid, handleChange, resetForm };
}

export default useForm;
