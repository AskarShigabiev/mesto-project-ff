// Функция открытия
function openPopup(popup) {
  popup.classList.add("popup_is-opened");
  document.addEventListener("keyup", closePopupEsc);
  addOverlayClick();
}

// добавление анимации открытия к попапам
function addAnimation() {
  const popups = document.querySelectorAll(".popup");
  popups.forEach((popup) => {
    popup.classList.add("popup_is-animated");
  });
}

// добавление анимации отправки к кнопкам
function addLoadingText(loading, button) {
  if (loading) {
    button.textContent = "Сохранение...";
  } else {
    button.textContent = "Сохранить";
  }
}

// Функция закрытия
function closePopup(popup) {
  popup.classList.remove("popup_is-opened");
  document.removeEventListener("keyup", closePopupEsc);
}

// Для закрытия по "Esc"
function closePopupEsc(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_is-opened");
    closePopup(openedPopup);
  }
}

// Обработчик клика по оверлею
function closePopupOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.currentTarget);
  }
}

// Добавляем обработчик клика попапам
function addOverlayClick() {
  const popups = document.querySelectorAll(".popup");
  popups.forEach((popup) => {
    popup.addEventListener("click", closePopupOverlay);
  });
}

export { openPopup, closePopup, addAnimation, addLoadingText };
