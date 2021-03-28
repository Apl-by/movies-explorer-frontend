import "./Form.css";
import cn from "classnames";

function Form({ children, onSubmit, modType, mix }) {
  const classNames = cn("form", { [`form_type_${modType}`]: modType }, mix);

  return (
    <form className={classNames} onSubmit={onSubmit}>
      {children}
    </form>
  );
}

export default Form;
