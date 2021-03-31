import "./SideBar.css";
import Button from "../generic/Button/Button";
import Navigation from "../generic/Navigation/Navigation";
import { navConfig } from "./data";
import { useEffect } from "react";
import cn from "classnames";

function SideBar({ history, close, isOpen }) {
  const cnSideBar = cn("side-bar", { "side-bar_visible": isOpen });
  const cnSideBarContainer = cn("side-bar__container", {
    "side-bar__container_visible": isOpen,
  });

  useEffect(() => {
    if (!isOpen) return;

    const handleCloseByEsc = (e) => {
      if (e.key === "Escape") {
        close();
      }
    };
    document.addEventListener("keyup", handleCloseByEsc);

    return () => {
      document.removeEventListener("keyup", handleCloseByEsc);
    };
  });

  const handleBtnClick = () => {
    history.push("/profile");
    close();
  };

  return (
    <div className={cnSideBar}>
      <div className={cnSideBarContainer}>
        <Button
          type="button"
          modType="close"
          onClick={close}
          mix="side-bar__close"
        />
        <Navigation
          config={navConfig}
          close={close}
          mix="side-bar__navigation"
        />
        <Button
          type="button"
          value="Аккаунт"
          modType="account"
          mix="side-bar__account"
          onClick={handleBtnClick}
        />
      </div>
    </div>
  );
}

export default SideBar;
