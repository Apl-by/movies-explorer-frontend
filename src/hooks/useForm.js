import { useState, useCallback } from "react";
import validator from "validator";

function useForm() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    const browserErr = target.validationMessage;

    if (name === "email" && (!browserErr || target.validity.customError)) {
      validator.isEmail(value)
        ? target.setCustomValidity("")
        : target.setCustomValidity("Некорректный адрес электронной почты");
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
