import "./Checkbox.css";
import cn from "classnames";

function Checkbox({ name, value, onChange, isChecked, mix, caption }) {
  const classNames = cn("checkbox", mix);

  return (
    <label className={classNames}>
      <input
        type="checkbox"
        className="checkbox__input"
        value={value}
        name={name}
        onChange={onChange}
        checked={isChecked}
      />
      <span className="checkbox__custom">{caption}</span>
    </label>
  );
}

export default Checkbox;
