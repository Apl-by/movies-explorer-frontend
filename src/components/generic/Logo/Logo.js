import "./Logo.css";
import { Link } from "react-router-dom";
import cn from "classnames";

function Logo({ logo, mix }) {
  const classNames = cn("logo", mix);

  return (
    <Link to="/" className={classNames}>
      <img className="logo__img" alt="Логотип" src={logo} />
    </Link>
  );
}

export default Logo;
