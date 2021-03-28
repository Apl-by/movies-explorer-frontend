import "./InputAuth.css";

function InputAuth({ type, name, value, onChange, fieldName, error }) {
  return (
    <label className="input-auth">
      <span className="input-auth__name">{fieldName}</span>
      <input
        type={type}
        name={name}
        value={value}
        className="input-auth__input"
        onChange={onChange}
      />
      <span className="input-auth__error">{error}</span>
    </label>
  );
}

export default InputAuth;
