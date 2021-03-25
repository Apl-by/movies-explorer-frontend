import "./AboutProject.css";
import { aboutData } from "./data";

function AboutProject() {
  return (
    <section className="about-project">
      <div className="about-project__container">
        <h2 className="about-project__title">О проекте</h2>
        <ul className="about-project__list">
          {aboutData.map((i) => (
            <li className="about-project__item" key={i.id}>
              <h3 className="about-project__item-title">{i.title}</h3>
              <p className="about-project__text">{i.description}</p>
            </li>
          ))}
        </ul>
        <div className="about-project__bar">
          <p className="about-project__back">1 неделя</p>
          <p className="about-project__front">4 недели</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
