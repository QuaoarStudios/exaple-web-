const navButton = document.getElementById('nav-button')
const navMenu = document.getElementsByClassName('nav-pages')[0]
const Header = document.getElementById('header')
const Main = document.getElementById('main')
let toggle = 0

const menuNav = function () {
  toggle = 1 - toggle
  Header.classList.toggle('nav-active--display')
  Main.classList.toggle('nav-active--display')
  navMenu.classList.toggle('nav-pages--show')
  navButton.classList.toggle('nav-button--fx')
}

function Nav (status = false) {
  if (status) {
    menuNav()
  }

  if (!status) {
    navButton.addEventListener('click', () => {
      menuNav()
    })
  }
}

window.addEventListener('resize', function () {
  if (window.innerWidth > 700 && toggle) {
    Nav(true)
  }
})

Nav()
