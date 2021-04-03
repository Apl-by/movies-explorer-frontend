import "./Form.css";
import cn from "classnames";

function Form({ children, onSubmit, modType, mix, noValidate }) {
  const classNames = cn("form", { [`form_type_${modType}`]: modType }, mix);

  return (
    <form className={classNames} onSubmit={onSubmit} noValidate={noValidate}>
      {children}
    </form>
  );
}

export default Form;
