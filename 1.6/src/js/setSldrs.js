import Swiper, { Pagination } from 'swiper'

const sliders = document.querySelectorAll('.swiper')

function setSldrs() {
  sliders.forEach((slider) => {
    let sizeСoefficient = slider.hasAttribute('data-szCffcnt')
      ? slider.getAttribute('data-szCffcnt')
      : 1
    let init = false
    let swiper
    function initSwiper() {
      if (window.innerWidth < 768 && !init) {
        init = true
        swiper = new Swiper(`.swiper--${slider.id}`, {
          modules: [Pagination],
          direction: 'horizontal',
          freeMode: true,
          preventClicks: true,
          spaceBetween: 16,

          pagination: {
            el: `.swiper-pagination`,
            type: 'bullets',
            clickable: 'true'
          },

          breakpoints: {
            0: {
              slidesPerView: 'auto'
            },
            320: {
              slidesPerView: 1.19 * sizeСoefficient
            },
            400: {
              slidesPerView: 1.69 * sizeСoefficient
            },
            480: {
              slidesPerView: 2.19 * sizeСoefficient
            }
          }
        })
        return
      }
      if (window.innerWidth >= 768 && init) {
        swiper.destroy()
        init = false
      }
    }

    initSwiper()
    window.addEventListener('resize', initSwiper)
  })
}

export { setSldrs }
