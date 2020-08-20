'use strict';

// Открытие окна
document.addEventListener('click', event => {
    const targetButtonShow = event.target.closest('.modal-show');
    if (!targetButtonShow) return;
    // Уверены что это была нажата кнопка вызова окна, запускаем функцию показа
    showModal.call(targetButtonShow); // Контекстом будет целевая кнопка
});

function showModal() {
    const typeModal = this.dataset.modal;
    const modalWrap = document.querySelector(typeModal).parentElement;
    // Показываем наш оверлей и окно
    modalWrap.classList.remove('hide-modal');
}

// Закрытие модального окна
const modalWindow = document.querySelector('.modal-window');
modalWindow.addEventListener('click', event => {
    const targetCloseButton = event.target.closest('.close-modal');
    if (!targetCloseButton) return;

    closeModal.call(targetCloseButton);
});

function closeModal() {
    const typeModal = this.dataset.modal;
    const modalWrap = document.querySelector(typeModal).parentElement;
    // Показываем наш оверлей и окно
    modalWrap.classList.add('hide-modal');
}





