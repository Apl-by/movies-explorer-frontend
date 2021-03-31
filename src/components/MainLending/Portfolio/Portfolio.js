import "./Portfolio.css";
import { portfolioData } from "./data";

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__list">
          {portfolioData.map((i) => (
            <li className="portfolio__item" key={i.id}>
              <a
                href={i.link}
                className="portfolio__link"
                target="_blank"
                rel="noreferrer"
              >
                {i.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
