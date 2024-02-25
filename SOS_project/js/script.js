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

    const tabs = document.querySelectorAll('.list_item_title'),
          content = document.querySelectorAll('.tabtitle'),
          tabsParent = document.querySelector('.box');

    function hideTabContent() {
        content.forEach(item => {
            item.classList.remove('tabtitle_active');
        });
    }

    function showTabContent(i = 0) {
        content[i].classList.add('tabtitle_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('list_item_title')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
});
