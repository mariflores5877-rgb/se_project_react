import { useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import { defaultClothingItems } from "../../utils/constants";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function App() {
  const [weatherData, setWeatherData] = useState({ type: "cold" });
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);
  const [activeModal, setActiveModal] = useState("");

  function handleAddClothesClick() {
    setActiveModal("add-garment");
  }

  function handleCloseModal() {
    setActiveModal("");
  }

  return (
    <>
      <div className="page">
        <div className="page__content">
          <Header onAddClothesClick={handleAddClothesClick} />
          <Main weatherData={weatherData} clothingItems={clothingItems} />
        </div>
        <ModalWithForm
          isOpen={activeModal === "add-garment"}
          onClose={handleCloseModal}
        />
      </div>
    </>
  );
}

export default App;
