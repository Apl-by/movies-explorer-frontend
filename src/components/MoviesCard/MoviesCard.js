import "./MoviesCard.css";
import Button from "../generic/Button/Button";
import { useState } from "react";
import { useLocation } from "react-router-dom";
// Временная картинка(удалить!!!)
import TEMPLATE_PIC from "../../images/TEMPLATE_PIC.jpg";

function MoviesCard({
  img = TEMPLATE_PIC,
  title = "В погоне за Бенкси",
  time = "27 минут",
}) {
  //Изменение состояния кнопки(для ревью по верстке)
  let location = useLocation();
  const { pathname: path } = location;
  const [isSaved, setIsSaved] = useState(false);
  const handleClick = (e) => {
    setIsSaved(!isSaved);
  };
  const btnConfig =
    path === "/saved-movies"
      ? { value: "", modType: "delete" }
      : isSaved
      ? { value: "", modType: "saved-movie" }
      : { value: "Сохранить", modType: "save-movie" };
  //--------------------------------------------------

  return (
    <div className="movies-card">
      <div className="movies-card__info">
        <p className="movies-card__title">{title}</p>
        <p className="movies-card__time">{time}</p>
      </div>
      <img src={img} alt="Временно" className="movies-card__poster" />
      <Button
        type="submit"
        value={btnConfig.value}
        modType={btnConfig.modType}
        mix="movies-card__btn"
        onClick={handleClick}
      />
    </div>
  );
}

export default MoviesCard;
