const btns = document.querySelectorAll('.show-all-btn')

function setShwAllBtns() {
  btns.forEach((btn) => {
    let originalText = btn.textContent
    let wraper =
      document.querySelector(`.${btn.id}__wrapper`) ||
      document.querySelector(`#${btn.id}`).firstElementChild
    function initBtns() {
      if (
        (window.innerWidth >= 768 ||
          btn.classList.contains('show-all-btn--top-article')) &&
        wraper.scrollHeight > wraper.clientHeight
      ) {
        btn.style.setProperty('display', 'block')
        btn.visible = true
      } else {
        btn.style.setProperty('display', 'none')
        btn.visible = false
      }
    }

    initBtns()

    window.addEventListener('resize', initBtns)

    btn.addEventListener('click', () => {
      if (btn.visible && !btn.active) {
        wraper.style.setProperty('height', 'auto')
        btn.style.setProperty('--transform-rotate', 'rotate(180deg)')
        btn.textContent = 'Скрыть'
        btn.active = true
      } else  {
        wraper.style.setProperty('height', '')
        btn.style.setProperty('--transform-rotate', 'rotate(0deg)')
        btn.textContent = originalText
        btn.active = false
      }
    })
  })
}

export { setShwAllBtns }
