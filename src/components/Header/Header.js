import "./Header.css";
import Logo from "../generic/Logo/Logo";
import Button from "../generic/Button/Button";
import Navigation from "../generic/Navigation/Navigation";
import logo from "../../images/logo.svg";
import { navConfig } from "./data";
import { Link } from "react-router-dom";
import cn from "classnames";

function Header({ location, history, isLoggedIn, onClick, isTablet }) {
  const { pathname: path } = location;

  const classNames = cn("header", { header_theme_light: path !== "/" });
  const navMod = path === "/" ? "light" : null;

  const btnConfig = !isLoggedIn
    ? { push: "login", mod: "login", value: "Войти" }
    : !isTablet
    ? { push: "profile", mod: "account", value: "Аккаунт" }
    : path === "/"
    ? { push: "side-bar", mod: "burger-light", value: "" }
    : { push: "side-bar", mod: "burger", value: "" };

  const handleBtnClick = () => {
    const { push } = btnConfig;

    if (push === "login") {
      history.push("/signin");
    }
    if (push === "profile") {
      history.push("/profile");
    }
    if (push === "side-bar") {
      onClick();
    }
    return;
  };

  return (
    <>
      {!isTablet && (
        <header className={classNames}>
          <div className="header__container">
            <Logo logo={logo} />
            {isLoggedIn && (
              <Navigation
                config={navConfig}
                mix="header__navigation"
                modTheme={navMod}
              />
            )}
            {!isLoggedIn && (
              <Link className="header__link" to="/signup">
                Регистрация
              </Link>
            )}
            <Button
              type="button"
              value={btnConfig.value}
              modType={btnConfig.mod}
              onClick={handleBtnClick}
            />
          </div>
        </header>
      )}

      {isTablet && (
        <header className={classNames}>
          <div className="header__container">
            <Logo logo={logo} />
            {!isLoggedIn && (
              <Link className="header__link" to="/signup">
                Регистрация
              </Link>
            )}
            <Button
              type="button"
              value={btnConfig.value}
              modType={btnConfig.mod}
              onClick={handleBtnClick}
            />
          </div>
        </header>
      )}
    </>
  );
}

export default Header;
