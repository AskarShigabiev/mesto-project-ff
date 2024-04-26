// Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;

// Функция создания карточки
function createCard(cardData, removeCard, openPopupImage) {
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

export { createCard, deleteCard };
