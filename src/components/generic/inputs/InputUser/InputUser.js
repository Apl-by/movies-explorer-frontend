import "./InputUser.css";

function InputUser({
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
  readOnly,
  anchor,
}) {
  return (
    <label className="input-user">
      <span className="input-user__name">{fieldName}</span>
      <input
        type={type}
        name={name}
        value={value}
        className="input-user__input"
        onChange={onChange}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        pattern={pattern}
        readOnly={readOnly}
        ref={anchor}
      />
      <span className="input-user__error">{error}</span>
    </label>
  );
}

export default InputUser;
