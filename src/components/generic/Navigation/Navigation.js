import "./Navigation.css";
import { NavLink } from "react-router-dom";
import cn from "classnames";

function Navigation({ config, mix, modTheme, close }) {
  const classNames = cn("navigation", mix, {
    [`navigation_theme_${modTheme}`]: modTheme,
  });

  return (
    <nav className={classNames}>
      <ul className="navigation__list">
        {config.map((i) => (
          <li className="navigation__item" key={i.id}>
            <NavLink
              to={i.path}
              exact={i.path === "/"}
              className="navigation__link"
              activeClassName="navigation__link_active"
              onClick={close}
            >
              {i.value}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
