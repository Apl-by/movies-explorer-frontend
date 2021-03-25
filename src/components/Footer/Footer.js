import "./Footer.css";
import { socialLinks } from "./data";
import SocialLinks from "../generic/SocialLinks/SocialLinks";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h2 className="footer__title">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h2>
        <div className="footer__content">
          <p className="footer__copyright">&copy; 2021</p>
          <SocialLinks links={socialLinks} modType="footer" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
