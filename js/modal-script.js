'use strict';

//TODO Открытие модального окна ---------------------------------------------------------------------
document.addEventListener('click', event => {
    const targetButtonShow = event.target.closest('.modal-show');
    if (!targetButtonShow) return;
    // Уверены что это была нажата кнопка вызова окна, запускаем функцию показа
    showModal.call(targetButtonShow); // Контекстом будет целевая кнопка

    // При каждом открытии окна, запускаем слушатель нажатия клавиш
    document.addEventListener('keydown', closeModalOnKey);
});

function showModal() {
    const typeModal = this.dataset.modal;
    const modalWrap = document.querySelector(typeModal).parentElement;
    // Показываем наш оверлей и окно
    modalWrap.classList.remove('hide-modal');
    // Убираем прокрутку
    document.body.style.overflowY = 'hidden';
}

//TODO Закрытие модального окна ---------------------------------------------------------------------
const modalWindow = document.querySelector('.modal-window');
modalWindow.addEventListener('click', event => {
    const targetCloseButton = event.target.closest('.close-modal');
    if (!targetCloseButton) return;

    closeModal.call(targetCloseButton);
});
const modalWrap = document.querySelector('.modal-wrap');
modalWrap.addEventListener('click', event => {
    // Если был клик именно по оверлею, тогда скрываем окно
    closeModalWrap.call(modalWrap);
});


const allModal = document.querySelectorAll('.modal-wrap');
// TODO Закрытие окна на Escape
function closeModalOnKey(event) {
    if (event.code == 'Escape') {
        // Скрываем все возможные окна и возвращаем прокрутку
        allModal.forEach(wrap => {
            wrap.classList.add('hide-modal');
        });
        document.body.style.overflowY = '';
        // Если нажали Esc, удаляем этот обработчик с документа
        document.removeEventListener('keydown', closeModalOnKey);
    }
    // console.warn(event.code);
}
// TODO Закрытие окна на крестик
function closeModal() {
    const typeModal = this.dataset.modal;
    const modalWrap = document.querySelector(typeModal).parentElement;
    // Показываем наш оверлей и окно
    modalWrap.classList.add('hide-modal');
    // Возвращаем прокрутку
    document.body.style.overflowY = '';
    // При закрытии, удаляем обработчик закрытия окна по нажатию клавиши
    document.removeEventListener('keydown', closeModalOnKey);
}
// TODO Закрытие окна по клику на оверлей
function closeModalWrap() {
    // Если целевой элемент у нас это именно оверлей, а не окно, тогда скрываем всё
    if (event.target === modalWrap) {
        event.target.classList.add('hide-modal');
        document.body.style.overflowY = '';
         // При закрытии, удаляем обработчик закрытия окна по нажатию клавиши
        document.removeEventListener('keydown', closeModalOnKey);
    }
}




