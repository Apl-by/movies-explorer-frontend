import "./AboutMe.css";
import student from "../../../images/student.jpg";
import { socialLinks, infoAbout } from "./data";

function AboutMe() {
  return (
    <section className="about-me">
      <div className="about-me__container">
        <h2 className="about-me__title">Студент</h2>
        <div className="about-me__box">
          <div className="about-me__info">
            <h3 className="about-me__subtitle">{infoAbout.name}</h3>
            <p className="about-me__description">{infoAbout.description}</p>
            <p className="about-me__text">{infoAbout.about}</p>
            <ul className="about-me__list">
              {socialLinks.map((i) => (
                <li key={i.id}>
                  <a
                    href={i.link}
                    target="_blank"
                    rel="noreferrer"
                    className="about-me__link"
                  >
                    {i.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <img src={student} alt="Фото студента" className="about-me__foto" />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
