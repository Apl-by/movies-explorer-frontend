import "./InputAuth.css";
import cn from "classnames";

function InputAuth({
  type,
  name,
  value,
  onChange,
  required,
  min,
  max,
  patern,
  fieldName,
  error,
  mix,
}) {
  const classNames = cn("input-auth", mix);

  return (
    <label className={classNames}>
      <span className="input-auth__name">{fieldName}</span>
      <input
        type={type}
        name={name}
        value={value}
        className="input-auth__input"
        onChange={onChange}
        required={required}
        minLength={min}
        maxLength={max}
        pattern={patern}
      />
      <span className="input-auth__error">error</span>
    </label>
  );
}

export default InputAuth;
