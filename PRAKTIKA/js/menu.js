window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.mobile_menu'),
    menuItem = document.querySelectorAll('.mobile_menu_item'),
    hamburger = document.querySelector('.hamburger'),
    button = document.getElementById('button'),
    body = document.querySelector('.body');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('mobile_menu_active');
        body.classList.toggle('body_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('mobile_menu_active');
            body.classList.toggle('body_active');
        })
    })

    // Про деактивацию кнопок под меню

    function updateButtonState() {
        if (menu = document.querySelector('mobile_menu_active')) {
            button.disabled = true;
        } else {
            button.disabled = false;
        }
    }
    // Обработчик события для вызова функции при изменении состояния меню
    menu.addEventListener('click', updateButtonState);
    // Инициализация состояния при загрузке страницы
    updateButtonState();


    // Про деактивацию прокрутки под меню
});
