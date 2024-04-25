import { openPopupImage, closePopup } from "./modal";

// Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;

// Функция создания карточки
function createCard(cardData, removeCard) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  const cardLikeBtn = cardElement.querySelector(".card__like-button");
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;

  cardLikeBtn.addEventListener("click",  function() {
    cardLikeBtn.classList.toggle("card__like-button_is-active");
  });

  const deleteButton = cardElement.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", () => {
    removeCard(cardElement);
  });

 cardImage.addEventListener("click", function () {
    openPopupImage(cardData.link, cardData.name);
  });

  return cardElement;
};

// Функция удаления карточки
function deleteCard(cardElement) {
  cardElement.remove();
};

// Создание карточек через "+"
function addNewCard(evt) {
  evt.preventDefault();
  const placesList = document.querySelector(".places__list");
  const cardName = document.querySelector(".popup__input_type_card-name");
  const cardUrl = document.querySelector(".popup__input_type_url");

  const newCardName = cardName.value;
  const newCardLink = cardUrl.value;
  const newCardData = {
    name: newCardName,
    link: newCardLink,
  };
  const newCardElement = createCard(newCardData, deleteCard);
  placesList.prepend(newCardElement);

  closePopup(document.activePopup);
  cardName.value = "";
  cardUrl.value = "";
};

export {createCard, deleteCard, addNewCard};
