import "./Checkbox.css";

function Checkbox({ name, value, onChange, isChecked }) {
  return (
    <label className="checkbox">
      <input
        type="checkbox"
        className="checkbox__input"
        value={value}
        name={name}
        onChange={onChange}
        checked={isChecked}
      />
      <span className="checkbox__custom"></span>
    </label>
  );
}

export default Checkbox;
