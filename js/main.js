"use strict";

const ajaxSend = async (formData) => {
  // создаем функцию отправки формы
  const fetchResp = await fetch("telegram.php", {
    // указываем обработчик формы — telegram.php
    method: "POST", // метод, которым мы отправляем форму
    body: formData, // что будет внутри формы — содержимое input
  });
  if (!fetchResp.ok) {
    // если ошибка, то...
    throw new Error(`Помилка за адресою ${url}, статус помилки ${fetchResp.status}`); // выводим статус ошибки и текст
  }
  return await fetchResp.text(); // если все хорошо, возвращаем ответ сервера
};

const forms = document.querySelectorAll("form"); // находим все теги form
forms.forEach((form) => {
  // для каждой формы...
  form.addEventListener("submit", function (e) {
    // отслеживаем событие отправки
    e.preventDefault(); // отменить стандартную отправку формы
    const formData = new FormData(this); // собираем все данные из формы
    console.log(formData);

    ajaxSend(formData) // передаем данные из формы в обработчик
      .then((response) => {
        // если все успешно, то..
        this.innerHTML = "Дякую,<br> заявку отримав!<br><br> Найлижчим часом з Вами зв'яжуся..."; /* окно благодарности */
        form.reset(); /*  очищаем поля формы */
      })
      .catch((err) => console.error(err)); /* если ошибка, выводим в консоль */
  });
});

const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical',
  slidesPerView: 1,
  loop: true,
  speed: 400,
  spaceBetween: 20,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next.portfolio__swiper-btn_next',
    prevEl: '.swiper-button-prev.portfolio__swiper-btn_prev',
  },
});

const menu = () => {
  const menuBurger = document.querySelector('.mobile-menu-catalog');
  const body = document.querySelector('body');

  menuBurger.addEventListener('click', (e) => {
    toggleMenu();
  });

  function toggleMenu() {
    menuBurger.classList.toggle('mobile-menu-catalog_active');

    if (menuBurger.classList.contains('mobile-menu-catalog_active')) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'visible';
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  let developerPhoto = document.querySelector('.developer-photo');
  document.addEventListener('mousemove', (event) => {
    developerPhoto.style.transform = 'translate3d(' + ((event.clientX * 0.2) / 3) + 'px,' + ((event.clientY * 0.4) / 8) + 'px,0px)';
  });
})

menu()