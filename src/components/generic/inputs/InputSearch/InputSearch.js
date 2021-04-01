import "./InputSearch.css";

function InputSearch({
  type,
  name,
  value,
  placeholder,
  onChange,
  required,
  minLength,
  maxLength,
  patern,
  error,
}) {
  return (
    <label className="input-search">
      <span className="input-search__icon" />
      <input
        type={type}
        name={name}
        value={value}
        className="input-search__input"
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        pattern={patern}
      />
      <span className="input-search__error">{error}</span>
    </label>
  );
}

export default InputSearch;
