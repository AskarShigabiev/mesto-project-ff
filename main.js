(()=>{"use strict";var e={baseUrl:"https://nomoreparties.co/v1/wff-cohort-13",headers:{authorization:"5e4fc64e-0659-4b29-82c5-7b1a86b270f0","Content-Type":"application/json"}};function t(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}var n=document.querySelector("#card-template").content;function o(o,r,c,a){var u=n.querySelector(".card").cloneNode(!0),i=u.querySelector(".card__image"),l=u.querySelector(".card__title"),s=u.querySelector(".card__like-button"),d=u.querySelector(".card__like-counter"),p=u.querySelector(".card__delete-button"),f=o._id;return i.src=o.link,i.alt=o.name,l.textContent=o.name,o.likes.some((function(e){return e._id===a}))&&s.classList.add("card__like-button_is-active"),o.likes&&0!==o.likes.length?d.textContent=o.likes.length:d.textContent=0,s.addEventListener("click",(function(){var n;s.classList.contains("card__like-button_is-active")?function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:"DELETE",headers:e.headers}).then(t)}(f).then((function(e){s.classList.remove("card__like-button_is-active"),d.textContent=e.likes.length})).catch((function(e){console.log(e)})):(n=f,fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:"PUT",headers:e.headers}).then(t)).then((function(e){s.classList.add("card__like-button_is-active"),d.textContent=e.likes.length})).catch((function(e){console.log(e)}))})),o.owner&&a!==o.owner._id&&(p.style.display="none"),p.addEventListener("click",(function(){var n;(n=f,fetch("".concat(e.baseUrl,"/cards/").concat(n),{method:"DELETE",headers:e.headers}).then(t)).then((function(){r(u)})).catch((function(e){console.log(e)}))})),i.addEventListener("click",(function(){c(o.link,o.name)})),u}function r(e){e.remove()}var c={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},a=document.querySelector(".places__list"),u=document.querySelector(".popup_type_edit"),i=document.querySelector(".popup_type_image"),l=document.querySelector(".popup_type_new-card"),s=document.querySelector(".popup_type_new-avatar"),d=document.forms["edit-profile"],p=document.querySelector(".profile__edit-button"),f=document.querySelector(".popup__input_type_name"),_=document.querySelector(".popup__input_type_description"),m=document.querySelector(".popup_type_edit .popup__close"),y=document.forms["new-place"],v=document.querySelector(".popup__input_type_card-name"),h=document.querySelector(".popup_type_new-card .popup__input_type_url"),S=document.querySelector(".profile__add-button"),b=document.querySelector(".popup_type_new-card .popup__close"),q=document.forms["new-avatar"],E=document.querySelector(".avatar__edit-button"),k=document.querySelector(".popup_type_new-avatar .popup__input_type_url"),g=document.querySelector(".popup__close-avatar"),L=document.querySelector(".profile__title"),C=document.querySelector(".profile__description"),w=document.querySelector(".profile__image"),x=i.querySelector(".popup__image"),A=i.querySelector(".popup__caption"),T=document.querySelector(".popup_type_image .popup__close"),U=document.querySelector(".popup__button_new-avatar"),j=document.querySelector(".popup__button_new-profile"),O=document.querySelector(".popup__button_new-card"),B=function(e,t,n){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),o.classList.remove(n.errorClass),o.textContent=""},D=function(e,t){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?B(e,t,c):function(e,t,n,o){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.add(o.inputErrorClass),r.classList.add(o.errorClass),r.textContent=n}(e,t,t.validationMessage,c)},P=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.classList.remove(n.inactiveButtonClass),t.disabled=!1):(t.classList.add(n.inactiveButtonClass),t.disabled=!0)};function I(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),o=e.querySelector(t.submitButtonSelector);P(n,o,t),n.forEach((function(n){B(e,n,t)}))}var M,N=document.querySelectorAll(".popup");function J(e){e.classList.add("popup_is-opened"),document.addEventListener("keyup",H)}function G(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keyup",H)}function H(e){"Escape"===e.key&&G(document.querySelector(".popup_is-opened"))}function V(e){e.target===e.currentTarget&&G(e.currentTarget)}function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function $(e,t){x.src=e,x.alt=t,A.textContent=t,J(i)}function F(e,t){t.textContent=e?"Сохранение...":"Сохранить"}window.onload=function(){N.forEach((function(e){e.classList.add("popup_is-animated")}))},N.forEach((function(e){e.addEventListener("click",V)})),Promise.all([fetch("".concat(e.baseUrl,"/users/me"),{method:"GET",headers:e.headers}).then(t),fetch("".concat(e.baseUrl,"/cards"),{method:"GET",headers:e.headers}).then(t)]).then((function(e){var t,n,c=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,c,a,u=[],i=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(o=c.call(n)).done)&&(u.push(o.value),u.length!==t);i=!0);}catch(e){l=!0,r=e}finally{try{if(!i&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw r}}return u}}(t,n)||function(e,t){if(e){if("string"==typeof e)return z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?z(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=c[0],i=c[1];L.textContent=u.name,C.textContent=u.about,M=u._id;var l=u.avatar;w.style.backgroundImage="url(".concat(l,")"),i.forEach((function(e){var t=o(e,r,$,M);a.append(t)}))})),p.addEventListener("click",(function(){J(u),f.value=L.textContent,_.value=C.textContent,I(d,c)})),S.addEventListener("click",(function(){J(l),q.reset(),I(q,c)})),E.addEventListener("click",(function(){J(s),I(q,c),q.reset()})),m.addEventListener("click",(function(){G(u)})),b.addEventListener("click",(function(){G(l)})),T.addEventListener("click",(function(){G(i)})),g.addEventListener("click",(function(){G(s)})),d.addEventListener("submit",(function(n){n.preventDefault(),function(){F(!0,j);var n=f.value,o=_.value;(function(n,o){return fetch("".concat(e.baseUrl,"/users/me"),{method:"PATCH",headers:e.headers,body:JSON.stringify({name:n,about:o})}).then(t)})(n,o).then((function(){L.textContent=n,C.textContent=o,G(u)})).catch((function(e){console.log(e)})).finally((function(){F(!1,j)}))}()})),q.addEventListener("submit",(function(n){n.preventDefault(),function(){F(!0,U);var n,o=k.value;(n=o,fetch("".concat(e.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:e.headers,body:JSON.stringify({avatar:n})}).then(t)).then((function(){w.style.backgroundImage="url(".concat(o,")"),G(s)})).catch((function(e){console.log(e)})).finally((function(){F(!1,U)}))}()})),y.addEventListener("submit",(function(n){var c;n.preventDefault(),F(!0,O),(c={name:v.value,link:h.value},fetch("".concat(e.baseUrl,"/cards"),{method:"POST",headers:e.headers,body:JSON.stringify({name:c.name,link:c.link})}).then(t)).then((function(e){var t=o(e,r,$,M);a.prepend(t),y.reset(),G(l)})).catch((function(e){console.log(e)})).finally((function(){F(!1,O)}))})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),o=e.querySelector(t.submitButtonSelector);P(n,o,t),n.forEach((function(r){r.addEventListener("input",(function(){D(e,r),P(n,o,t)}))}))}(t,e)}))}(c)})();