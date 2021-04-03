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
}) {
  return (
    <label className="input-user">
      <span className="input-user__name">{fieldName}</span>
      <input
        type={type}
        name={name}
        // value={value}
        // сделать value через onChange
        defaultValue={value}
        className="input-user__input"
        onChange={onChange}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        pattern={pattern}
      />
      <span className="input-user__error">error</span>
    </label>
  );
}

export default InputUser;
