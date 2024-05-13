import { likeOtherCard, deliteLikeOtherCard, deleteYourCard } from "./API.js";

// Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;

// Функция создания карточки
function createCard(cardData, removeCard, openPopupImage, profileId) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  const cardLikeBtn = cardElement.querySelector(".card__like-button");
  const cardLikeCounter = cardElement.querySelector(".card__like-counter");
  const deleteButton = cardElement.querySelector(".card__delete-button");
  const cardId = cardData._id;

  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;

  // для отображения, что карточка была лайкнула пользователем
  const userLikerCard = cardData.likes.some((likes) => likes._id === profileId);
  if (userLikerCard) {
    cardLikeBtn.classList.add("card__like-button_is-active");
  }

  if (!cardData.likes || cardData.likes.length === 0) {
    cardLikeCounter.textContent = 0;
  } else {
    cardLikeCounter.textContent = cardData.likes.length;
  }

  cardLikeBtn.addEventListener("click", () => {
    if (!cardLikeBtn.classList.contains("card__like-button_is-active")) {
      likeOtherCard(cardId)
        .then((cardData) => {
          cardLikeBtn.classList.add("card__like-button_is-active");
          cardLikeCounter.textContent = cardData.likes.length;
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      deliteLikeOtherCard(cardId)
        .then((cardData) => {
          cardLikeBtn.classList.remove("card__like-button_is-active");
          cardLikeCounter.textContent = cardData.likes.length;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });

  if (cardData.owner && profileId !== cardData.owner._id) {
    deleteButton.style.display = "none";
  }

  deleteButton.addEventListener("click", () => {
    deleteYourCard(cardId)
      .then(() => {
        removeCard(cardElement);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  cardImage.addEventListener("click", function () {
    openPopupImage(cardData.link, cardData.name);
  });

  return cardElement;
}

// Функция удаления карточки
function deleteCard(cardElement) {
  cardElement.remove();
}

export { createCard, deleteCard };
