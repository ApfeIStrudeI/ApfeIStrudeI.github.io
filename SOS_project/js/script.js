window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.mobile_menu'),
    menuItem = document.querySelectorAll('.mobile_menu_item'),
    navigation = document.querySelector('.navigation'),
    body = document.querySelector('.body'),
    topMobSc = document.querySelector('.top-mob-sc'),
    hamburger = document.querySelector('.hamburger');

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
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 10) {
            navigation.classList.add('navigation_active');
            topMobSc.classList.add('top-mob-sc_active');
        } else {
            navigation.classList.remove('navigation_active');
            topMobSc.classList.remove('top-mob-sc_active');
        }
    })
});