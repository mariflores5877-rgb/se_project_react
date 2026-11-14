import "./DeleteConfirmationModal.css";
import close from "../../assets/close.svg";

export default function DeleteConfirmationModal({
  isOpen,
  onClose,
  onConfirm,
}) {
  return (
    <div className={`modal ${isOpen ? "modal_is-opened" : ""}`}>
      <div className="modal__content modal__content_type_confirm">
        <button
          type="button"
          onClick={onClose}
          className="modal__close"
          aria-label="Close"
        >
          <img src={close} alt="Close" className="modal__close-icon" />
        </button>
        <p className="confirm-modal__text">
          Are you sure you want to delete this item?
          <br />
          This action is irreversible.
        </p>
        <button
          type="button"
          className="confirm-modal__delete-btn"
          onClick={onConfirm}
        >
          Yes, delete item
        </button>
        <button
          type="button"
          className="confirm-modal__cancel-btn"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
