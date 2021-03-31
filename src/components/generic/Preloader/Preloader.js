import "./Preloader.css";

function Preloader() {
  return (
    <div className="preloader">
      <div className="preloader__container">
        <span className="preloader__round"></span>
        <p className="preloader__text">Поиск...</p>
      </div>
    </div>
  );
}

export default Preloader;
