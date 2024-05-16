const config = {
  baseUrl: "https://nomoreparties.co/v1/wff-cohort-13",
  headers: {
    authorization: "5e4fc64e-0659-4b29-82c5-7b1a86b270f0",
    "Content-Type": "application/json",
  },
};


// функция проверки ответа
function checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
};

// Получение данных для профиля
function getDataProfile() {
  return fetch(`${config.baseUrl}/users/me`, {
    method: "GET",
    headers: config.headers,
  })
    .then(checkResponse);
}

// Получение данных для карточки
function getDataCards() {
  return fetch(`${config.baseUrl}/cards`, {
    method: "GET",
    headers: config.headers,
  })
  .then(checkResponse);
}

// Редактирование профиля на сервере
function editProfileData(newName, newJob) {
  return fetch(`${config.baseUrl}/users/me`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      name: newName,
      about: newJob,
    }),
  })
  .then(checkResponse);
}

// Добавление карточки на сервер
function editCardData(cardData) {
  return fetch(`${config.baseUrl}/cards`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      name: cardData.name,
      link: cardData.link,
    }),
  })
  .then(checkResponse);
}

// Лайк карточки
function likeOtherCard(id) {
  return fetch(`${config.baseUrl}/cards/likes/${id}`, {
    method: "PUT",
    headers: config.headers,
  })
  .then(checkResponse);
}

// Убрать лайк карточки
function deliteLikeOtherCard(id) {
  return fetch(`${config.baseUrl}/cards/likes/${id}`, {
    method: "DELETE",
    headers: config.headers,
  })
  .then(checkResponse);
}

// Удаление карточки
function deleteYourCard(id) {
  return fetch(`${config.baseUrl}/cards/${id}`, {
    method: "DELETE",
    headers: config.headers,
  })
  .then(checkResponse);
}

// Изменение аватара
function editYourAvatar(avatarNewLink) {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      avatar: avatarNewLink,
    }),
  })
  .then(checkResponse);
}

export {
  getDataProfile,
  getDataCards,
  editProfileData,
  editCardData,
  likeOtherCard,
  deliteLikeOtherCard,
  deleteYourCard,
  editYourAvatar,
};
