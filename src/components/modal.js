// Функция открытия
function openPopup(popup) {
  const profileTitle = document.querySelector(".profile__title");
  const profileDescription = document.querySelector(".profile__description");
  const nameInput = document.querySelector(".popup__input_type_name"); 
  const jobInput = document.querySelector(".popup__input_type_description"); 

  popup.classList.add("popup_is-opened");
  popup.classList.add("popup_is-animated");
  document.activePopup = popup;
  document.activePopup.addEventListener("click", function (evt) {
    if (evt.target === document.activePopup) {
      closePopup(document.activePopup);
    }
  });;
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
  document.addEventListener("keyup", closePopupEsc)
};

// Функция открытия попапа карточки
function openPopupImage(imageSrc, imageName) {
  const popupImage = document.querySelector(".popup_type_image");
  const popupImageBig = popupImage.querySelector(".popup__image"); 
  const popupImageName = popupImage.querySelector(".popup__caption");
  popupImageBig.src = imageSrc;
  popupImageBig.alt = imageName;
  popupImageName.textContent = imageName;

  openPopup(popupImage);
};

 // Функция закрытия
function closePopup(popup) {
  popup.classList.remove("popup_is-opened");
  document.removeEventListener("keyup", closePopupEsc);
};

// Для закрытия по "Esc"
function closePopupEsc(evt) {
  if (evt.key === "Escape") {
    closePopup(evt.currentTarget.activePopup);
  }
};

export {openPopup, openPopupImage,closePopup}
