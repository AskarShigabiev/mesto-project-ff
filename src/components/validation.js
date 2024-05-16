import { validationConfig } from "./const.js";

// ПР7 добавление клаcса с ошибкой
const showError = (
  formElement,
  inputElement,
  errorMessage,
  validationConfig
) => {
  const formError = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(validationConfig.inputErrorClass);
  formError.classList.add(validationConfig.errorClass);
  formError.textContent = errorMessage;
};

// ПР7 удаление клаcса с ошибкой
const hideError = (formElement, inputElement, validationConfig) => {
  const formError = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(validationConfig.inputErrorClass);
  formError.classList.remove(validationConfig.errorClass);
  formError.textContent = "";
};

// ПР7 проверка валидности
const checkValidity = (formElement, inputElement) => {
  if (inputElement.validity.patternMismatch) {
    inputElement.setCustomValidity(inputElement.dataset.errorMessage);
  } else {
    inputElement.setCustomValidity("");
  }

  if (!inputElement.validity.valid) {
    showError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      validationConfig
    );
  } else {
    hideError(formElement, inputElement, validationConfig);
  }
};

// ПР7 проверка массива
const invalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

// ПР7 вкл/выкл кнопки 'сохранить'
const toggleButtonState = (inputList, buttonElement, validationConfig) => {
  if (invalidInput(inputList)) {
    buttonElement.classList.add(validationConfig.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(validationConfig.inactiveButtonClass);
    buttonElement.disabled = false;
  }
};

// ПР7 слушатель набора текста
const setEventListener = (formElement, validationConfig) => {
  const inputList = Array.from(
    formElement.querySelectorAll(validationConfig.inputSelector)
  );
  const buttonElement = formElement.querySelector(
    validationConfig.submitButtonSelector
  );

  toggleButtonState(inputList, buttonElement, validationConfig);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkValidity(formElement, inputElement);

      toggleButtonState(inputList, buttonElement, validationConfig);
    });
  });
};

// ПР7 очистка полей ввода
function clearValidation(formElement, validationConfig) {
  const inputList = Array.from(
    formElement.querySelectorAll(validationConfig.inputSelector)
  );
  const buttonElement = formElement.querySelector(
    validationConfig.submitButtonSelector
  );

  toggleButtonState(inputList, buttonElement, validationConfig);
  inputList.forEach((inputElement) => {
    hideError(formElement, inputElement, validationConfig);
  });
}

function enableValidation(validationConfig) {
  const formList = Array.from(
    document.querySelectorAll(validationConfig.formSelector)
  );
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    setEventListener(formElement, validationConfig);
  });
}

export { enableValidation, clearValidation };
