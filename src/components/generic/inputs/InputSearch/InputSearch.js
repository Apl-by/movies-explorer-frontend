import "./InputSearch.css";

function InputSearch({ type, name, value, placeholder, onChange, error }) {
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
      />
      <span className="input-search__error">{error}</span>
    </label>
  );
}

export default InputSearch;
