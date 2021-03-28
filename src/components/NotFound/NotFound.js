import "./NotFound.css";
import Button from "../generic/Button/Button";

function NotFound({ onClick }) {
  return (
    <main className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__subtitle">Страница не найдена</p>
      <Button type="button" value="Назад" modType="back" onClick={onClick} />
    </main>
  );
}

export default NotFound;
