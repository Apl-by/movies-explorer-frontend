import "./Promo.css";
import banner from "../../../images/banner.svg";
import Button from "../../generic/Button/Button";

function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
        <div className="promo__box">
          <div className="promo__description">
            <h1 className="promo__title">
              Учебный проект студента факультета Веб&#8209;разработки
            </h1>
            <p className="promo__text">
              Листайте ниже, чтобы узнать больше про этот проект и его
              создателя.
            </p>
          </div>
          <img
            src={banner}
            alt="Баннер 'Земной шар'"
            className="promo__banner"
          />
        </div>
        <Button type="button" value="Узнать больше" modType="promo" />
      </div>
    </section>
  );
}

export default Promo;
