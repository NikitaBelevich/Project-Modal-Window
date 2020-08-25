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
    const modalWrap = document.querySelector(typeModal);
    // Показываем наш оверлей и окно
    modalWrap.classList.remove('hide-modal');
    // Убираем прокрутку
    document.body.style.overflowY = 'hidden';
}

//TODO Закрытие модального окна ---------------------------------------------------------------------
const modalWindow = document.querySelector('.modal-wrap__for-button');
const modalWrap = document.querySelector('.modal-wrap');
const allModal = document.querySelectorAll('.modal-wrap');

modalWindow.addEventListener('click', event => {
    const targetCloseButton = event.target.closest('.close-modal');
    if (!targetCloseButton) return;
    closeModal();
    document.removeEventListener('keydown', closeModalOnKey);
});
modalWrap.addEventListener('click', event => {
    // Если был клик именно по оверлею, а не по окну тогда скрываем всё
    if (event.target === modalWrap) {
        closeModal();
        document.removeEventListener('keydown', closeModalOnKey);
    }
});


// TODO Закрытие всех окон и возврат прокрутки
function closeModal() {
    // Закрываем все возможные модальные окна
    allModal.forEach(modal => {
        modal.classList.add('hide-modal');
    });
    // Возвращаем прокрутку
    document.body.style.overflowY = '';
}
// TODO Закрытие окна на Escape
function closeModalOnKey(event) {
    if (event.code == 'Escape') {
        // Скрываем все возможные окна и возвращаем прокрутку
        closeModal();
        // Если нажали Esc, удаляем этот обработчик с документа
        document.removeEventListener('keydown', closeModalOnKey);
    }
    // console.warn(event.code);
}