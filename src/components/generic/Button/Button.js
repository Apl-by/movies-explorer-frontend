import "./Button.css";
import cn from "classnames";

function Button({ type, value, modType, onClick }) {
  const classNames = cn("button", { [`button_type_${modType}`]: modType });

  return (
    <button className={classNames} type={type} onClick={onClick}>
      {value}
    </button>
  );
}

export default Button;
