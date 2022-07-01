// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";

// Что бы страница не дергалась

const header = document.querySelector(".header")
const page = document.querySelector(".page")

addEventListener("scroll", () => {
	if (header.classList.contains("_header-scroll")) {
		page.classList.add("header-padding")
	} else {
		page.classList.remove("header-padding")
	}
})

// переключение картинок

// var imgIndex = 1
// showImgs(imgIndex)

// /* Функция увеличивает индекс на 1, показывает следующую картинку*/

// function nextImg() {
// 	showImgs((imgIndex += 1))
// }

// setInterval(() => {
// 	nextImg()
// }, 5000)

// /* Основная функция картинок */
// function showImgs(imgItem) {
// 	var i
// 	var imgs = document.querySelectorAll(".block__right .switch__img")
// 	if (imgItem > imgs) {
// 		imgIndex = 1
// 	}
// 	if (imgItem < 1) {
// 		imgIndex = imgs.length
// 	}
// 	for (i = 0; i < imgs.length; i++) {
// 		imgs[i].className = imgs[i].className.replace(" active__img", "")
// 	}
// 	imgs[imgIndex - 1].className += " active__img"
// }
