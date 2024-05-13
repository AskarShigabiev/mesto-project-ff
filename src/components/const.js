const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const placesList = document.querySelector(".places__list"); // список карточек

const popupProfile = document.querySelector(".popup_type_edit"); // попап профиля
const popupImage = document.querySelector(".popup_type_image"); // попап картинок
const popupCard = document.querySelector(".popup_type_new-card"); // попап карт
const popupAvatar = document.querySelector(".popup_type_new-avatar"); // попап аватара

const formNewProfile = document.forms["edit-profile"]; // форма для заполения в профиле
const editProfile = document.querySelector(".profile__edit-button"); // кнопка редактировать профиль
const nameInput = document.querySelector(".popup__input_type_name"); // редактировать имя в профиле
const jobInput = document.querySelector(".popup__input_type_description"); // редактировать описание в профиле
const closePopupProfile = document.querySelector(
  ".popup_type_edit .popup__close"
); // кнопка закрытия редактирования профиля

const formNewCard = document.forms["new-place"]; // форма для заполения в "+" карту
const cardName = document.querySelector(".popup__input_type_card-name"); // поле попапа для названия места
const cardUrl = document.querySelector(
  ".popup_type_new-card .popup__input_type_url"
); // поле попапа для URL
const editCard = document.querySelector(".profile__add-button"); // кнопка "+" карточку
const closePopupCard = document.querySelector(
  ".popup_type_new-card .popup__close"
); // кнопка закрытия добавления карточки

const formNewAvatar = document.forms["new-avatar"]; // форма смены аватара
const editAvatar = document.querySelector(".avatar__edit-button"); // кнопка смены аватара
const avatarUrl = document.querySelector(
  ".popup_type_new-avatar .popup__input_type_url"
); // поле попапа для URL
const closePopupAvatar = document.querySelector(".popup__close-avatar"); // кнопка закрытия

const profileTitle = document.querySelector(".profile__title"); // имя профиля
const profileDescription = document.querySelector(".profile__description"); // работа в профиле
const profileAvatar = document.querySelector(".profile__image"); // аватар на странице

const popupImageBig = popupImage.querySelector(".popup__image"); // для попапа карточки
const popupImageName = popupImage.querySelector(".popup__caption"); // для надписи под попапом карточки
const closePopupImage = document.querySelector(
  ".popup_type_image .popup__close"
); // кнопка закрытия карточки

const avatarSubmit = document.querySelector(".popup__button_new-avatar"); // кнопки submit для надписей
const profileSubmit = document.querySelector(".popup__button_new-profile");
const cardSubmit = document.querySelector(".popup__button_new-card");

export {
  validationConfig,
  placesList,
  popupProfile,
  popupCard,
  popupImage,
  formNewProfile,
  editProfile,
  nameInput,
  jobInput,
  closePopupProfile,
  formNewCard,
  cardName,
  cardUrl,
  editCard,
  closePopupCard,
  profileTitle,
  profileDescription,
  popupImageBig,
  popupImageName,
  closePopupImage,
  popupAvatar,
  formNewAvatar,
  editAvatar,
  avatarUrl,
  profileAvatar,
  closePopupAvatar,
  avatarSubmit,
  profileSubmit,
  cardSubmit,
};
