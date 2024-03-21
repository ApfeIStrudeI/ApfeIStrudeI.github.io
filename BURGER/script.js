window.addEventListener('DOMContentLoaded', () => {
    class Advantages {
        constructor(src, alt, title, desc, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.desc = desc;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
        }
        render() {
            const element = document.createElement('div');
            if (this.classes.length === 0) {
                this.element = 'reasons__content';
                element.classList.add(this.element);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }
            element.innerHTML = `
                <img src=${this.src} alt=${this.alt} class="reasons__icon">
                <h3 class="reasons__title">
                    ${this.title}
                </h3>
                <div class="reasons__desc">
                    ${this.desc}
                </div>
            `;
            this.parent.append(element);
        }
    }

    new Advantages(
        'img/burger.png',
        'burger',
        'Авторские рецепты',
        'Наши бургеры обладают уникальным сочетанием вкусов и не похожи ни на какие другие. Мы тщательно отбираем лучшие ингредиенты и сочетания вкусов для нашего меню.',
        '.advantages .reasons'
    ).render();

    new Advantages(
        'img/meat.png',
        'meat',
        'Мраморная говядина',
        'Для наших бургеров мы используем отборную 100% мраморную говядину, которую закупаем исключительно у фермеров. Мы уверены в качестве нашего мяса.',
        '.advantages .reasons'
    ).render();

    new Advantages(
        'img/food_truck.png',
        'car',
        'Быстрая доставка',
        'Мы доставляем в пределах МКАД за 30 минут, а если не успеем — доставка бесплатно. Мы тщательно упаковываем наши бургеры, чтобы по дороге они не остыли.',
        '.advantages .reasons'
    ).render();


    class CatalogItem {
        constructor(src, title, desc, price, weight, parentSelector, ...classes) {
            this.src = src;
            this.title = title;
            this.desc = desc;
            this.price = price;
            this.weight = weight;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
        }
        render() {
            const element = document.createElement('div');
            if (this.classes.length === 0) {
                this.element = 'catalog__card';
                element.classList.add(this.element);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }
            element.innerHTML = `
                <img src=${this.src} class="card-img">
                <h3 class="card-title">
                    ${this.title}
                </h3>
                <div class="card-desc">
                    ${this.desc}
                </div>
                <div class="card-sub-container">
                    <div>
                        <div class="price">${this.price} $</div>
                        <div class="weight">${this.weight} гр</div>
                    </div>
                    <button class="catalog__btn">
                        <span>
                            Заказатьㅤ
                        </span>
                        <i class="fa-solid fa-cart-shopping"></i>
                    </button>
                </div>
            `;
            this.parent.append(element);
        }
    }

    new CatalogItem(
        'img/burger_1_3.png',
        'Бургер чеддер & бекон',
        'Котлета из говядины криспи, булочка, томат, сыр Чеддер, грудинка, лук красный, салат айсбер, майонез, кетчуп, сырный соус',
        '8',
        '360',
        '.catalog .catalog__content',
        'catalog__card'
    ).render();

    new CatalogItem(
        'img/burger_10_1.png',
        'BBQ с беконом и курицей',
        'Булочка бриошь с кунжутом, куриная котлета, сыр чеддер, томат, огурец маринованный, лук маринованный, салат Ромен, бекон, соус BBQ',
        '7',
        '390',
        '.catalog .catalog__content'
    ).render();

    new CatalogItem(
        'img/burger_12_1.png',
        'Дабл биф бургер',
        'Две говяжьи котлеты, сыр чеддер, салат романо, маринованные огурцы, свежий томат, бекон, красный лук, соус бургер, горчица',
        '10',
        '420',
        '.catalog .catalog__content'
    ).render();

    new CatalogItem(
        'img/burger_9_1.png',
        'Баварский бургер',
        'Булочка для бургера, говяжья котлета, красный лук, сыр, охотничья колбаска, соус барбекю, соус сырный, салат айсберг',
        '7',
        '220',
        '.catalog .catalog__content'
    ).render();

    new CatalogItem(
        'img/burger_6_1.png',
        'Рояль сыр',
        'Булочка для бургера, говяжья котлета, грудинка, помидор, огурец маринованный, сыр, сырный соус, кетчуп, зелень',
        '8',
        '220',
        '.catalog .catalog__content'
    ).render();

    new CatalogItem(
        'img/burger_3_1.png',
        'Индиана бургер',
        'Булочка для бургера, котлета куриная, грудинка, яйцо, огурец маринованный, криспи лук, кетчуп, соус сырный, горчица, зелень',
        '9',
        '320',
        '.catalog .catalog__content'
    ).render();
});
