import "./Modal.css";
import Button from "../Button/Button";
import cn from "classnames";

function Modal({ modalError, onClose }) {
  const classNames = cn("modal", {
    modal_visible: modalError.length,
  });

  return (
    <div className={classNames}>
      <h2 className="modal__title">{`Ошибка ${modalError[0]}`}</h2>
      <p className="modal__message">{modalError[1]}</p>
      <Button type="button" value="Закрыть" modType="modal" onClick={onClose} />
    </div>
  );
}

export default Modal;
