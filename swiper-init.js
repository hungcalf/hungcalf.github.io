const swiper = new Swiper('.swiper', {
    grabCursor:true, 
    centeredSlides:true,
    freeMode:true, 
    slidesPerView:'auto',
    effect:'cards',
    cardsEffect:{
        slideShadows:true,
        rotate:true,
        transformEl:null,
    },

  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});