import { useEffect, useState } from "react";
import "./App.css";
import { APIkey, coordinates } from "../../utils/constants";
import Header from "../Header/Header";
import WeatherCard from "../WeatherCard/WeatherCard";
import Main from "../Main/Main";
import { defaultClothingItems } from "../../utils/constants";
import { Route, Routes } from "react-router-dom";
import Profile from "../Profile/Profile";
import ClothesSection from "../ClothesSection/ClothesSection";
import AddItemModal from "../AddItemModal/AddItemModal";
import ItemModal from "../ItemModal/ItemModal";
import Footer from "../Footer/Footer";
import { filterWeatherData, getWeather } from "../../utils/weatherApi";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    city: "",
    condition: "",
    isDay: false,
  });

  const [value, setValue] = useState(false);
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [weatherType, setWeatherType] = useState("");
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

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

  function handleAddItemSubmit(inputValues, resetForm) {
    const newItem = {
      _id: Date.now(),
      name: inputValues.name,
      link: inputValues.link,
      weather: inputValues.weatherType,
    };
    setClothingItems([newItem, ...clothingItems]);
    handleCloseModal("");
    resetForm();
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
    <div className="page">
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <div className="page__content">
          <Header
            isMobileMenuOpened={isMobileMenuOpened}
            toggleMobileMenu={toggleMobileMenu}
            onAddClothesClick={handleAddClothesClick}
            weatherData={weatherData}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  weatherData={weatherData}
                  clothingItems={clothingItems}
                  onCardClick={handleCardClick}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  clothingItems={clothingItems}
                  onCardClick={handleCardClick}
                  onAddClothesClick={handleAddClothesClick}
                />
              }
            />
          </Routes>

          <Footer />
        </div>

        <AddItemModal
          isOpen={activeModal === "add-garment"}
          onClose={handleCloseModal}
          onAddItem={handleAddItemSubmit}
        />
        <ItemModal
          isOpen={activeModal === "preview-item"}
          onClose={handleCloseModal}
          card={selectedCard}
        />
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
