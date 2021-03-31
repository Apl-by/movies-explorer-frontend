import "./InputUser.css";

function InputUser({
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
        minLength={min}
        maxLength={max}
        pattern={patern}
      />
      <span className="input-user__error">error</span>
    </label>
  );
}

export default InputUser;
