if(document.querySelector('.slider-service-announcements .swiper')) {
  var swiper = new Swiper(".slider-service-announcements .swiper", {
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,
    spaceBetween: 24,
    grabCursor: true,
    pagination: {
      el: ".slider-service-announcements .swiper-pagination",
      clickable: true,
    },

  });
}

