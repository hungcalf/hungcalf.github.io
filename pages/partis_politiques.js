const swiper = new Swiper('.swiper', {
    grabCursor: true,
    centeredSlides: true,
    freeMode: false,
    slidesPerView: 'auto',
    effect: 'flip',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + ' parti' + (index+1) + '"></span>';
          },
    },
});