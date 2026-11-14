import { useForm } from "../../hooks/useForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
const AddItemModal = ({ isOpen, onAddItem, onClose }) => {
  const defaultValues = {
    name: "",
    imageUrl: "",
    weatherType: "",
  };
  const { values, handleChange, setValues } = useForm(defaultValues);

  function resetForm() {
    setValues(defaultValues);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddItem(values, resetForm);
  }

  return (
    <ModalWithForm
      title="New garment"
      name="add-garment"
      buttonText="Add garment"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="modal__label">
        Name{""}
        <input
          required
          type="text"
          className="modal__input"
          id="name"
          placeholder="Name"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="imageUrl" className="modal__label">
        Image URL{""}
        <input
          required
          type="url"
          className="modal__input"
          id="imageUrl"
          placeholder="Image URL"
          name="imageUrl"
          value={values.imageUrl}
          onChange={handleChange}
        />
      </label>
      <fieldset className="modal__radio-btns">
        <legend className="modal__legend">Select the weather type:</legend>
        <label htmlFor="hot" className="modal__label modal__label_type_radio">
          <input
            id="hot"
            name="weatherType"
            type="radio"
            value="hot"
            className="modal__radio-input"
            checked={values.weatherType === "hot"}
            onChange={handleChange}
          />
          <span>Hot</span>
        </label>
        <label htmlFor="warm" className="modal__label modal__label_type_radio">
          <input
            id="warm"
            name="weatherType"
            type="radio"
            value="warm"
            className="modal__radio-input"
            checked={values.weatherType === "warm"}
            onChange={handleChange}
          />
          <span>Warm</span>
        </label>
        <label htmlFor="cold" className="modal__label modal__label_type_radio">
          <input
            id="cold"
            name="weatherType"
            type="radio"
            value="cold"
            className="modal__radio-input"
            checked={values.weatherType === "cold"}
            onChange={handleChange}
          />
          <span>Cold</span>
        </label>
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;
