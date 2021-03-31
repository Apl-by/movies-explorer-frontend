import "./MainLending.css";
import Promo from "./Promo/Promo";
import AboutProject from "./AboutProject/AboutProject";
import Techs from "./Techs/Techs";
import AboutMe from "./AboutMe/AboutMe";
import Portfolio from "./Portfolio/Portfolio";
import { useRef } from "react";

function MainLending() {
  const scrollTo = useRef(null);

  const handleScroll = () => {
    const position = scrollTo.current.getBoundingClientRect().top + 50;
    window.scrollBy({
      top: position,
      behavior: "smooth",
    });
  };

  return (
    <main className="main-lending">
      <Promo onClick={handleScroll} />
      <AboutProject anchor={scrollTo} />
      <Techs />
      <AboutMe />
      <Portfolio />
    </main>
  );
}

export default MainLending;
