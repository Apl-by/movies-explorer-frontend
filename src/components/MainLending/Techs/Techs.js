import "./Techs.css";
import { techsData, techsInfo } from "./data";

function Techs() {
  return (
    <section className="techs">
      <div className="techs__container">
        <h2 className="techs__title">Технологии</h2>
        <h3 className="techs__subtitle">{techsInfo.subtitle}</h3>
        <p className="techs__text">{techsInfo.about}</p>
        <ul className="techs__list">
          {techsData.map((i, ind) => (
            <li className="techs__item" key={ind}>
              {i}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Techs;
