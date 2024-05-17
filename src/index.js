import "./pages/index.css";
import { createCard, deleteCard } from "./components/card.js";
import { enableValidation, clearValidation } from "./components/validation.js";
import {
  openPopup,
  closePopup,
  addAnimation,
  addOverlayClick
} from "./components/modal.js";
import {
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
  profileAvatar,
  popupImageBig,
  popupImageName,
  closePopupImage,
  popupAvatar,
  formNewAvatar,
  editAvatar,
  avatarUrl,
  closePopupAvatar,
  avatarSubmit,
  profileSubmit,
  cardSubmit,
} from "./components/const.js";
import {
  getDataProfile,
  getDataCards,
  editProfileData,
  editCardData,
  editYourAvatar,
} from "./components/API.js";

// анимация для попапов после загрузки страницы
window.onload = addAnimation;

addOverlayClick();

// для id пользователя
let profileId;

// Получение данных для профиля и карточек
Promise.all([getDataProfile(), getDataCards()]).then(([userData, cardData]) => {
  profileTitle.textContent = userData.name;
  profileDescription.textContent = userData.about;
  profileId = userData._id;
  
  const avatarUrl = userData.avatar;
  profileAvatar.style.backgroundImage = `url(${avatarUrl})`;

  cardData.forEach((cardData) => {
    const cardElement = createCard(
      cardData,
      deleteCard,
      openPopupImage,
      profileId
    );
    placesList.append(cardElement);
  })
})
.catch((err) => {
  console.log(err);
});

// Для открытия форм
editProfile.addEventListener("click", function () {
  openPopup(popupProfile);
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
  clearValidation(formNewProfile, validationConfig);
});

editCard.addEventListener("click", function () {
  openPopup(popupCard);
  formNewCard.reset();
  clearValidation(formNewCard, validationConfig);
});

editAvatar.addEventListener("click", function () {
  openPopup(popupAvatar);
  formNewAvatar.reset();
  clearValidation(formNewAvatar, validationConfig);
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
 
closePopupAvatar.addEventListener("click", function () { 
  closePopup(popupAvatar); 
});

// Отправка формы смены имени и занятия
function handleProfileFormSubmit() {
  addLoadingText(true, profileSubmit);

  const newName = nameInput.value;
  const newJob = jobInput.value;

  editProfileData(newName, newJob)
    .then(() => {
      profileTitle.textContent = newName;
      profileDescription.textContent = newJob;
      closePopup(popupProfile);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      addLoadingText(false, profileSubmit);
    });
};

// Обработчик событий для отправки
formNewProfile.addEventListener("submit", (evt) => {
  evt.preventDefault();
  handleProfileFormSubmit();
});

// Отправка формы смены аватара
function handleAvatarFormSubmit() {
  addLoadingText(true, avatarSubmit);

  const newAvatarUrl = avatarUrl.value;

  editYourAvatar(newAvatarUrl)
    .then(() => {
      profileAvatar.style.backgroundImage = `url(${newAvatarUrl})`;
      closePopup(popupAvatar);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      addLoadingText(false, avatarSubmit);
    })
}

// Обработчик событий для отправки
formNewAvatar.addEventListener("submit", (evt) => {
  evt.preventDefault();
  handleAvatarFormSubmit();
});

// Создание карточек через кнопку на странице(+)
function addNewCard(evt) {
  evt.preventDefault();

  addLoadingText(true, cardSubmit);
  const newCardData = {
    name: cardName.value,
    link: cardUrl.value,
  };

  editCardData(newCardData)
    .then((newData) => {
      const newCardElement = createCard(
        newData,
        deleteCard,
        openPopupImage,
        profileId
      );
      placesList.prepend(newCardElement);
      formNewCard.reset();
      closePopup(popupCard);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      addLoadingText(false, cardSubmit);
    });
}

// Обработчик событий для отправки
formNewCard.addEventListener("submit", addNewCard);

// Функция открытия попапа карточки
function openPopupImage(imageSrc, imageName) {
  popupImageBig.src = imageSrc;
  popupImageBig.alt = imageName;
  popupImageName.textContent = imageName;

  openPopup(popupImage);
}

// добавление анимации отправки к кнопкам
function addLoadingText(loading, button) {
  if (loading) {
    button.textContent = "Сохранение...";
  } else {
    button.textContent = "Сохранить";
  }
}

enableValidation(validationConfig);
