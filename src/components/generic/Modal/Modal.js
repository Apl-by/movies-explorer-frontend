import "./Modal.css";
import Button from "../Button/Button";
import cn from "classnames";

function Modal({ apiError, onClose }) {
  const classNames = cn("modal", {
    modal_visible: Object.entries(apiError).length,
  });

  return (
    <div className={classNames}>
      <h2 className="modal__title">{`Ошибка ${apiError.status}`}</h2>
      <p className="modal__message">{apiError.message}</p>
      <Button type="button" value="Закрыть" modType="modal" onClick={onClose} />
    </div>
  );
}

export default Modal;
