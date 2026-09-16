import "./ModalWithForm.css";

function ModalWithForm({ isOpen, onClose }) {
  return (
    <div className={`modal ${isOpen ? "modal_is-opened" : ""} `}>
      <form className="modal__form">
        <h2 className="modal__title">New garment</h2>
        <button
          type="button"
          onClick={onClose}
          className="modal__close"
          aria-label="Close"
        >
          &times;
        </button>
        <label htmlFor="name" className="modal__label">
          Name{""}
          <input
            type="text"
            className="modal__input"
            id="name"
            placeholder="Name"
          />
        </label>
        <label htmlFor="imageUrl" className="modal__label">
          Image{""}
          <input
            type="text"
            className="modal__input"
            id="imageUrl"
            placeholder="Image URL"
          />
        </label>
        <fieldset className="modal__radio-btns">
          <legend className="modal__legend">Select the weather type:</legend>
          <label htmlFor="hot" className="modal__label modal__label_type_radio">
            <input
              id="cold"
              name="weatherType"
              type="radio"
              className="modal__radio-input"
            />
            <span>Hot</span>
          </label>
          <label
            htmlFor="warm"
            className="modal__label modal__label_type_radio"
          >
            <input
              id="cold"
              name="weatherType"
              type="radio"
              className="modal__radio-input"
            />
            <span>Warm</span>
          </label>
          <label
            htmlFor="cold"
            className="modal__label modal__label_type_radio"
          >
            <input
              id="cold"
              name="weatherType"
              type="radio"
              className="modal__radio-input"
            />
            <span>Cold</span>
          </label>
        </fieldset>
        <button type="submit" className="modal__submit">
          Add garment
        </button>
      </form>
    </div>
  );
}

export default ModalWithForm;
