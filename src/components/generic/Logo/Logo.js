import "./Logo.css";
import { Link } from "react-router-dom";

function Logo({ logo }) {
  return (
    <Link to="/" className="logo">
      <img className="logo__img" alt="Логотип" src={logo} />
    </Link>
  );
}

export default Logo;
