import { useEffect, useState } from "react";
import "./App.css";
import { APIkey, coordinates } from "../../utils/constants";
import Header from "../Header/Header";
import WeatherCard from "../WeatherCard/WeatherCard";
import Main from "../Main/Main";
import { defaultClothingItems } from "../../utils/constants";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import Footer from "../Footer/Footer";
import { filterWeatherData, getWeather } from "../../utils/weatherApi";
import { use } from "react";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999 },
    city: "",
  });
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState("");
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [weatherType, setWeatherType] = useState("");

  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);
  function toggleMobileMenu() {
    setIsMobileMenuOpened(!isMobileMenuOpened);
  }

  function handleAddClothesClick() {
    setIsMobileMenuOpened(false);
    setActiveModal("add-garment");
  }

  function handleCloseModal() {
    setActiveModal("");
  }

  function handleCardClick(item) {
    setSelectedCard(item);
    setActiveModal("preview-item");
  }

  function handleAddGarmentSubmit(evt) {
    evt.preventDefault();
    const newItem = { name, imageUrl, weather: weatherType };
    setClothingItems([newItem, ...clothingItems]);
    handleCloseModal("");
    setName("");
    setImageUrl("");
    setWeatherType("");
  }

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <div className="page">
        <div className="page__content">
          <Header
            isMobileMenuOpened={isMobileMenuOpened}
            toggleMobileMenu={toggleMobileMenu}
            onAddClothesClick={handleAddClothesClick}
            weatherData={weatherData}
          />
          <Main
            weatherData={weatherData}
            clothingItems={clothingItems}
            onCardClick={handleCardClick}
          />
          <Footer />
        </div>
        <ModalWithForm
          isOpen={activeModal === "add-garment"}
          onClose={handleCloseModal}
          onSubmit={handleAddGarmentSubmit}
          title="New garment"
          buttonText="Add garment"
        >
          <label htmlFor="name" className="modal__label">
            Name{""}
            <input
              type="text"
              className="modal__input"
              id="name"
              placeholder="Name"
              value={name}
              onChange={(evt) => setName(evt.target.value)}
            />
          </label>
          <label htmlFor="imageUrl" className="modal__label">
            Image{""}
            <input
              type="text"
              className="modal__input"
              id="imageUrl"
              placeholder="Image URL"
              value={imageUrl}
              onChange={(evt) => setImageUrl(evt.target.value)}
            />
          </label>
          <fieldset className="modal__radio-btns">
            <legend className="modal__legend">Select the weather type:</legend>
            <label
              htmlFor="hot"
              className="modal__label modal__label_type_radio"
            >
              <input
                id="hot"
                name="weatherType"
                type="radio"
                className="modal__radio-input"
                checked={weatherType === "hot"}
                onChange={() => setWeatherType("hot")}
              />
              <span>Hot</span>
            </label>
            <label
              htmlFor="warm"
              className="modal__label modal__label_type_radio"
            >
              <input
                id="warm"
                name="weatherType"
                type="radio"
                className="modal__radio-input"
                checked={weatherType === "warm"}
                onChange={() => setWeatherType("warm")}
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
                checked={weatherType === "cold"}
                onChange={() => setWeatherType("cold")}
              />
              <span>Cold</span>
            </label>
          </fieldset>
        </ModalWithForm>
        <ItemModal
          isOpen={activeModal === "preview-item"}
          onClose={handleCloseModal}
          card={selectedCard}
        />
      </div>
    </>
  );
}

export default App;
