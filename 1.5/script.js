let init = false
const swiperCard = () => {
  if ((window.innerWidth < 768) && !init) {
    init = true
    swiper = new Swiper('.swiper', {
      // enabled: false,
      // loop: true,

      direction: 'horizontal',
      freeMode: true,
      preventClicks: true,

      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: 'true',
      },

      breakpoints: {
        0: {
          slidesPerView: 'auto',
        },
        320: {
          slidesPerView: 1.25,
        },
        400: {
          slidesPerView: 1.75,
        },
        480: {
          slidesPerView: 2.25,
        },
      }
    })
    return
  }
  if ((window.innerWidth >= 768) && init) {
    swiper.destroy();
    init = false;
  }
}
swiperCard()
window.addEventListener('resize', swiperCard)

const showButton = document.querySelector('.brends__show-all')
const wraper = document.querySelector('.brends__list-wrapper')

const showMore = () => {
  if (window.getComputedStyle(wraper).getPropertyValue('height') === '160px') {
    wraper.style.setProperty('height', 'fit-content')
    showButton.style.setProperty('--transform-rotate', 'rotate(180deg)')
    showButton.textContent = 'Скрыть'
  } else {
    wraper.style.setProperty('height', '160px')
    showButton.style.setProperty('--transform-rotate', 'rotate(0deg)')
    showButton.textContent = 'Показать все'
  }
}
showButton.addEventListener('click', showMore)