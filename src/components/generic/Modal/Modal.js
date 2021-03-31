import "./Modal.css";
import Button from "../Button/Button";
import cn from "classnames";

function Modal({ apiError, onClose }) {
  const classNames = cn("modal", {
    modal_visible: Object.entries(apiError).length,
  });

  return (
    <div className={classNames}>
      <h2 className="modal__title">Ошибка 500</h2>
      <p className="modal__message">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod rem porro
        necessitatibus reiciendis dignissimos reprehenderit tenetur, sint
        sapiente repellendus id magni vel suscipit ut expedita? Earum numquam
        quibusdam sunt id.
      </p>
      <Button type="button" value="Закрыть" modType="modal" onClick={onClose} />
    </div>
  );
}

export default Modal;
