import "./AboutMe.css";
import student from "../../../images/student.jpg";
import { socialLinks, infoAbout } from "./data";
import SocialLinks from "../../generic/SocialLinks/SocialLinks";

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
            <SocialLinks links={socialLinks} />
          </div>
          <img src={student} alt="Фото студента" className="about-me__foto" />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
