window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.mobile_menu'),
    menuItem = document.querySelectorAll('.mobile_menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('mobile_menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('mobile_menu_active');
        })
    })
})