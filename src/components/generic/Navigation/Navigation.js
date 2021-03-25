import "./Navigation.css";
import { NavLink } from "react-router-dom";
import cn from "classnames";

function Navigation({ config, mix, modTheme }) {
  const classNames = cn("navigation", mix, {
    [`navigation_theme_${modTheme}`]: modTheme,
  });

  return (
    <nav className={classNames}>
      <ul className="navigation__list">
        {config.map((i) => (
          <li key={i.id}>
            <NavLink
              to={i.path}
              className="navigation__link"
              activeClassName="navigation__link_active"
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
