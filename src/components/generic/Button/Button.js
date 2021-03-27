import "./Button.css";
import cn from "classnames";

function Button({ type, value, modType, mix, onClick }) {
  const classNames = cn("button", { [`button_type_${modType}`]: modType }, mix);

  return (
    <button className={classNames} type={type} onClick={onClick}>
      {value}
    </button>
  );
}

export default Button;
