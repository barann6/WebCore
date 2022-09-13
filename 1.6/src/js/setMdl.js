const btns = document.querySelectorAll('.show-pop-up')
const fog = document.createElement('div')
const underFog = document.querySelector('body')

function setMdl() {
  fog.classList.add('fog')

  btns.forEach((btn) => {
    let popUp = document.querySelector(`.${btn.dataset.modal}`)
    let clsBtn = document.querySelector(`#${btn.dataset.modal}--close`)
    console.log(btn)
    console.log(popUp)
    console.log(clsBtn)

    btn.addEventListener('click', () => {
      popUp.style.setProperty(
        '--transform-var',
        window.innerWidth >= 768
          ? btn.dataset.modal === 'side-menu'
            ? 'translateX(-320px)'
            : 'translateX(100vw)'
          : 'translateY(-100vh)'
      )
      popUp.style.setProperty(
        '--display-var',
        btn.dataset.modal === 'side-menu' ? 'flex' : 'block'
      )
      underFog.appendChild(fog)
      underFog.style.setProperty('overflow', 'hidden')
      if (btn.dataset.modal !== 'side-menu') fog.style.setProperty('z-index', '5')
      
      // fog.style.setProperty('display', 'block')

      setTimeout(() => {
        fog.style.setProperty('--opacity-var', '0.85')
        popUp.style.setProperty(
          '--transform-var',
          window.innerWidth >= 768 ? btn.dataset.modal === 'side-menu' ? 'translateX(0)' : 'translateX(calc(220px + 50vw))' : 'translateY(0)'
        )
        if (btn.dataset.modal === 'side-menu') {
          popUp.style.setProperty(
            '--box-shadow-var',
            '-2px 0px 4px rgba(69, 79, 126, 0.02), 16px 0px 52px rgba(14, 24, 80, 0.2)'
          )
        }
      }, 0)

      clsBtn.addEventListener('click', () => {
        popUp.style.setProperty(
          '--transform-var',
          window.innerWidth >= 768 ? btn.dataset.modal === 'side-menu' ? 'translateX(-320px)' : 'translateX(100vw)' : 'translateY(-100vh)'
        )
        popUp.style.setProperty('--box-shadow-var', 'none')
        fog.style.setProperty('--opacity-var', '0')

        setTimeout(() => {
          fog.removeAttribute('style')
          fog.remove()
          popUp.removeAttribute('style')
          underFog.removeAttribute('style')
        }, 550)

        fog.removeEventListener('click', () => {})
      })

      fog.addEventListener('click', () => {
        popUp.style.setProperty(
          '--transform-var',
          window.innerWidth >= 768 ? btn.dataset.modal === 'side-menu' ? 'translateX(-320px)' : 'translateX(100vw)' : 'translateY(-100vh)'
        )
        popUp.style.setProperty('--box-shadow-var', 'none')
        fog.style.setProperty('--opacity-var', '0')

        setTimeout(() => {
          fog.removeAttribute('style')
          fog.remove()
          popUp.removeAttribute('style')
          underFog.removeAttribute('style')
        }, 550)

        fog.removeEventListener('click', () => {})
      })
    })
  })
}

export { setMdl }
