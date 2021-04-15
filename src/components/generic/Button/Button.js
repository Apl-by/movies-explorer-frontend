import "./Button.css";
import cn from "classnames";

function Button({ type, value, modType, mix, onClick, disabled }) {
  const classNames = cn("button", { [`button_type_${modType}`]: modType }, mix);

  return (
    <button
      className={classNames}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {value}
    </button>
  );
}

export default Button;
