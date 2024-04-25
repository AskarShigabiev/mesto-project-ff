import "./pages/index.css";
import { initialCards } from "./components/cards.js";
import { createCard, deleteCard, addNewCard } from "./components/card.js";
import { openPopup, closePopup } from "./components/modal.js";

const popupProfile = document.querySelector(".popup_type_edit"); // попап профиля
const popupCard = document.querySelector(".popup_type_new-card"); // попап карт
const popupImage = document.querySelector(".popup_type_image"); // попап картинок

const editProfile = document.querySelector(".profile__edit-button"); // кнопка редактировать профиль
const closePopupProfile = document.querySelector(".popup_type_edit .popup__close"); // кнопка закрытия редактирования профиля

const editCard = document.querySelector(".profile__add-button"); // кнопка "+" карточку
const closePopupCard = document.querySelector(".popup_type_new-card .popup__close"); // кнопка закрытия добавления карточки

const nameInput = document.querySelector(".popup__input_type_name"); // редактировать имя в профиле
const jobInput = document.querySelector(".popup__input_type_description"); // редактировать описание в профиле
const formProfile = document.forms["edit-profile"]; // форма для заполения в профиле

const profileTitle = document.querySelector(".profile__title"); // имя профиля
const profileDescription = document.querySelector(".profile__description"); // работа в профиле

const closePopupImage = document.querySelector(".popup_type_image .popup__close"); // кнопка закрытия карточки

const formNewCard = document.forms["new-place"]; // форма для заполения в "+" карту

// Вывести карточки на страницу
initialCards.forEach(function (item) {
  const placesList = document.querySelector(".places__list");
  const cardElement = createCard(item, deleteCard);
  placesList.append(cardElement);
});

// Обработчики событий для открытия
editProfile.addEventListener("click", function () {
  openPopup(popupProfile);
});

editCard.addEventListener("click", function () {
  openPopup(popupCard);
});

// Обработчики событий для закрытия
closePopupProfile.addEventListener("click", function () {
  closePopup(popupProfile);
});

closePopupCard.addEventListener("click", function () {
  closePopup(popupCard);
});

closePopupImage.addEventListener("click", function () {
  closePopup(popupImage);
});

// Отправка формы в профиле
function handleFormSubmit(evt) {
  evt.preventDefault();
  
  const newName = nameInput.value;
  const newJob = jobInput.value;
  profileTitle.textContent = newName;
  profileDescription.textContent = newJob;
  closePopup(document.activePopup);
};

formProfile.addEventListener("submit", handleFormSubmit);

formNewCard.addEventListener("submit", addNewCard);
