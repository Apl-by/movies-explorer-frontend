import "./InputUser.css";

function InputUser({ type, name, value, onChange, fieldName, error }) {
  return (
    <label className="input-user">
      <span className="input-user__name">{fieldName}</span>
      <input
        type={type}
        name={name}
        // сделать value через onChange
        defaultValue={value}
        className="input-user__input"
        onChange={onChange}
      />
      <span className="input-user__error">error</span>
    </label>
  );
}

export default InputUser;
