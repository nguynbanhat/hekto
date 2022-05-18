$('.slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    dots: true,
});

$('.featured-wrap').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    dots: true,
});

$('.categories-wrap').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    dots: true,
});

// tabs-1

var $ = document.querySelector.bind(document)
    $$ = document.querySelectorAll.bind(document)
    tabs = $$('.featured__item-detail')
    tabPanes = $$('.tabs-1')
    atTabs = $('.featured__item-detail.active')
    atTabPane = $('.tabs-1.active')

    tabs.forEach(function(e,index) {
        var tabPane = tabPanes[index];
        e.onclick = function() {
            $('.featured__item-detail.active').classList.remove('active');
            $('.tabs-1.active').classList.remove('active');
            this.classList.add('active');
            tabPane.classList.add('active');
        }
    })

// tabs-2

var tabs2 = $$('.discount__item-detail')
    tabPanes2 = $$('.tabs-2')
    atTabs2 = $('.discount__item-detail.active')
    atTabPane2 = $('.tabs-2.active')

    tabs2.forEach(function(e,index) {
        var tabPane2 = tabPanes2[index];
        e.onclick = function() {
            $('.discount__item-detail.active').classList.remove('active');
            $('.tabs-2.active').classList.remove('active');
            this.classList.add('active');
            tabPane2.classList.add('active');
        }
    })

// menu mb

var menu = document.querySelector('.menu-top')
var menuItem = document.querySelector('.menu__mobi')
var menuClose = document.querySelector('.header__item--close')

menu.onclick = function(e) {
    console.log('lew lew')
    menuItem.classList.toggle('menu-active');         
}

menuClose.onclick = function() {
    menuItem.classList.toggle('menu-active');
}