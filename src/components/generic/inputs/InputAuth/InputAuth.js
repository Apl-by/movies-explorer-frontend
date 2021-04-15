import "./InputAuth.css";
import cn from "classnames";

function InputAuth({
  type,
  name,
  value,
  onChange,
  required,
  minLength,
  maxLength,
  pattern,
  fieldName,
  error,
  mix,
}) {
  const cnInputAuth = cn(
    "input-auth",
    { "input-auth_valid": !error && value },
    mix
  );
  const cnInputAuthInput = cn("input-auth__input", {
    "input-auth__input_invalid": error,
  });

  return (
    <label className={cnInputAuth}>
      <span className="input-auth__name">{fieldName}</span>
      <input
        type={type}
        name={name}
        value={value}
        className={cnInputAuthInput}
        onChange={onChange}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        pattern={pattern}
      />
      <span className="input-auth__error">{error}</span>
    </label>
  );
}

export default InputAuth;
