// Функция открытия
function openPopup(popup) {
  popup.classList.add("popup_is-opened");
  document.addEventListener("keyup", closePopupEsc);
};

// добавление анимации к попапам
function addAnimation() {
  const popups = document.querySelectorAll('.popup');
  popups.forEach(popup => {
      popup.classList.add('popup_is-animated');
  });
}

 // Функция закрытия
function closePopup(popup) {
  popup.classList.remove("popup_is-opened");
  document.removeEventListener("keyup", closePopupEsc);
};

// Для закрытия по "Esc"
function closePopupEsc(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector('.popup_is-opened');
    closePopup(openedPopup); 
  }
};

export { openPopup, closePopup, addAnimation }
