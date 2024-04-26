import "./pages/index.css";
import { initialCards } from "./components/cards.js";
import { createCard, deleteCard } from "./components/card.js";
import { openPopup, closePopup, addAnimation } from "./components/modal.js";

const placesList = document.querySelector(".places__list"); // список карточек

const popupProfile = document.querySelector(".popup_type_edit"); // попап профиля
const popupCard = document.querySelector(".popup_type_new-card"); // попап карт
const popupImage = document.querySelector(".popup_type_image"); // попап картинок

const formProfile = document.forms["edit-profile"]; // форма для заполения в профиле
const editProfile = document.querySelector(".profile__edit-button"); // кнопка редактировать профиль
const nameInput = document.querySelector(".popup__input_type_name"); // редактировать имя в профиле
const jobInput = document.querySelector(".popup__input_type_description"); // редактировать описание в профиле
const closePopupProfile = document.querySelector(".popup_type_edit .popup__close"); // кнопка закрытия редактирования профиля

const formNewCard = document.forms["new-place"]; // форма для заполения в "+" карту
const cardName = document.querySelector(".popup__input_type_card-name"); // поле попапа для названия места
const cardUrl = document.querySelector(".popup__input_type_url"); // поле попапа для URL 
const editCard = document.querySelector(".profile__add-button"); // кнопка "+" карточку
const closePopupCard = document.querySelector(".popup_type_new-card .popup__close"); // кнопка закрытия добавления карточки

const profileTitle = document.querySelector(".profile__title"); // имя профиля
const profileDescription = document.querySelector(".profile__description"); // работа в профиле

const popupImageBig = popupImage.querySelector(".popup__image"); // для попапа карточки 
const popupImageName = popupImage.querySelector(".popup__caption"); // для надписи под попапом карточки
const closePopupImage = document.querySelector(".popup_type_image .popup__close"); // кнопка закрытия карточки

// Вывести карточки на страницу
initialCards.forEach(function (item) {
  const cardElement = createCard(item, deleteCard, openPopupImage);
  placesList.append(cardElement);
});

// анимация для попапов после загрузки страницы
window.onload = function(popup) {
  addAnimation(popup);
};

// Обработчики событий для открытия
editProfile.addEventListener("click", function () {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
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
  closePopup(popupProfile);
};

formProfile.addEventListener("submit", handleFormSubmit);

// Создание карточек через "+"
function addNewCard(evt) {
  evt.preventDefault();

  const newCardData = { 
    name: cardName.value, 
    link: cardUrl.value, 
  };
  const newCardElement = createCard(newCardData, deleteCard);
  placesList.prepend(newCardElement);

  closePopup(popupCard);
  cardName.value = "";
  cardUrl.value = "";
};

formNewCard.addEventListener("submit", addNewCard);

// Функция открытия попапа карточки
function openPopupImage(imageSrc, imageName) {;
  popupImageBig.src = imageSrc;
  popupImageBig.alt = imageName;
  popupImageName.textContent = imageName;

  openPopup(popupImage);
};
